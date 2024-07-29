import React, { createContext, useContext, useState, useEffect } from "react";
import Toast from "react-native-toast-message";

const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [livrariasSelecionadas, setLivrariasSelecionadas] = useState([]);
  const [milhoEstimado, setMilhoEstimado] = useState(0);
  const [materiaSecaExistente, setMateriaSecaExistente] = useState(0);
  const [fracaoProteica, setFracaoProteica] = useState(0);
  const [mineral, setMineral] = useState(0);
  const [materiaSecaFaltando, setMateriaSecaFaltando] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pdrTotal, setPDRTotal] = useState(0);
  const [proteinaSoluvelTotal, setProteinaSoluvelTotal] = useState(0);
  const [fdnEfetivoTotal, setFdnEfetivoTotal] = useState(0);
  const [pbTotal, setPBTotal] = useState(0);
  const [pndrTotal, setPNDRTotal] = useState(0);
  const [ndtTotal, setNDTTotal] = useState(0);
  const [itemFDNTotal, setItemFDNTotal] = useState(0);
  const [cnfTotal, setCNFTotal] = useState(0);
  const [amidoTotal, setAMIDOTotal] = useState(0);
  const [eeTotal, setEETotal] = useState(0);
  const [msTotalDigitado, setMsTotalDigitado] = useState(0);
  const [moTotal, setMoTotal] = useState(0);
  const [msTotalDieta , setMsTotalDieta] = useState(0);
  
  const [token, setToken] = useState("")
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [userCreatedAt, setUserCreatedAt] = useState("")
  

  const handleAddLivraria = (livrariaSelecionada) => {
    if (livrariasSelecionadas.length < 3) {
      setLivrariasSelecionadas([...livrariasSelecionadas, livrariaSelecionada]);
    } else {
      Toast.show({
        type: "error",
        text1: "Limite de 3 livrarias atingido",
      });
    }
  };

  const [dieta, setDieta] = useState({
    nome_da_dieta: "",
    peso_medio: 0,
    producao_estimada: 0,
    del: 0,
    fill_preenchimento_ruminal: 0,
    ims: 0,
    fdn: 0,
    selectedLivrarias: [],
    fdnTotal: 0,
    amidoEstimado: 0,
    milhoEstimado: 0,
  });

  const [nomeDieta, setNomeDieta] = useState("");
  const [pesoMedio, setPesoMedio] = useState(0);
  const [producaoEstimada, setProducaoEstimada] = useState(0);
  const [del, setDel] = useState(0);
  const [fillPreenchimentoRuminal, setFillPreenchimentoRuminal] = useState(0);
  const [ims, setIms] = useState(0);
  const [fdn, setFdn] = useState(0);

  const updateDieta = (field, value) => {
    setDieta((prevDieta) => ({
      ...prevDieta,
      [field]: value,
    }));
  };

  const calcularFDNAlimentos = () => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorFDN = parseFloat(livraria.fdn);
      const FDNAlimento = kgMs * (teorFDN / 100);
      return { ...livraria, FDNAlimento };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularFDNTotal = () => {
    const total = dieta.selectedLivrarias.reduce((acc, livraria) => acc + (livraria.FDNAlimento || 0), 0);
    updateDieta("fdnTotal", total);
  };

  const calcularAmidoExistente = () => {
    let totalAmidoExistente = 0;
    dieta.selectedLivrarias.forEach(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorAmido = parseFloat(livraria.amido);
      totalAmidoExistente += kgMs * (teorAmido / 100);
    });
    return totalAmidoExistente;
  };

  const calcularAmidoTotalNecessario = (amido) => {
    return ims * (amido / 100);
  };

  const calcularMilhoEstimado = (amidoTotalNecessario) => {
    const amidoExistente = calcularAmidoExistente();
    const amidoFaltando = amidoTotalNecessario - amidoExistente;
    const milhoEstimado = amidoFaltando / 0.72;
    setMilhoEstimado(milhoEstimado.toFixed(2));
    return milhoEstimado.toFixed(2);
  };

  const calcularMateriaSecaExistente = (milhoEstimado) => {
    const kgMsTotal = dieta.selectedLivrarias.reduce((acc, livraria) => acc + parseFloat(livraria.kgMs), 0);
    const totalMateriaSecaExistente = kgMsTotal + parseFloat(milhoEstimado);
    setMateriaSecaExistente(totalMateriaSecaExistente.toFixed(2));
    return totalMateriaSecaExistente.toFixed(2);
  };

  const calcularFracaoProteica = (materiaSecaExistente) => {
    const totalFracaoProteica = (parseFloat(ims) - parseFloat(materiaSecaExistente)) / 2;
    setFracaoProteica(totalFracaoProteica.toFixed(2));
    return totalFracaoProteica.toFixed(2)
  };

  const calcularMineral = () => {
    const mineralCalculado = dieta.producao_estimada * 0.014;
    setMineral(mineralCalculado.toFixed(2));
    return mineralCalculado.toFixed(2);
  };

  const calcularMateriaSecaExistente2 = (milhoEstimado, fracaoProteica, mineral) => {
    const kgMsTotal = dieta.selectedLivrarias.reduce((acc, livraria) => acc + parseFloat(livraria.kgMs), 0);
    const totalMateriaSecaExistente = kgMsTotal + parseFloat(milhoEstimado) + parseFloat(fracaoProteica) + parseFloat(mineral);
    setMateriaSecaExistente(totalMateriaSecaExistente.toFixed(2));
    return totalMateriaSecaExistente.toFixed(2);
  };

  const calcularMateriaSecaFaltando = (materiaSecaExistente2) => {
    const materiaSecaExistenteNum2 = parseFloat(materiaSecaExistente2);
    const materiaSecaFaltando = ims - materiaSecaExistenteNum2;
    setMateriaSecaFaltando(materiaSecaFaltando.toFixed(2));
    return materiaSecaFaltando.toFixed(2);
  };

  const calcularMOIndividualAlimentos = () => {
    let totalMO = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorMS = parseFloat(livraria.ms);
      
        const calculo = kgMs / teorMS
     
        const materiaOrganica = calculo * 100;

        const materiaOrganicaFormatada = materiaOrganica.toFixed(2);

        totalMO += materiaOrganica;

        setMoTotal(totalMO.toFixed(2));

        return { ...livraria, materiaOrganicaFormatada };
     
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  };
  
//==> PB <==
const calcularPBAlimentos = () => {
  let totalPB = 0;
  let totalKGMS = 0;
  const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
    const kgMs = parseFloat(livraria.kgMs);
    const teorPB = parseFloat(livraria.pb);
    const conta = kgMs * teorPB;
    const proteinaBruta = conta / 100;
    totalPB += proteinaBruta;
    const pbFormatado = parseFloat(proteinaBruta.toFixed(2));
    totalKGMS += kgMs;
    setMsTotalDigitado(totalKGMS)
    return { ...livraria, pbFormatado };
  });

  updateDieta("selectedLivrarias", updatedLivrarias);

  const total = totalPB / totalKGMS;
  const totalPorcentagem = total * 100

  return totalPorcentagem;
};

  const calcularPBTotal = (PBAlimentos) => {
    const pbFormatadoTotal = PBAlimentos
    setPBTotal(pbFormatadoTotal.toFixed(2));
    return pbFormatadoTotal.toFixed(2);
  };

  //==> FDN Efetivo <==      
  const calcularFDNEfetivoAlimentos = () => {   
  let totalFDNEfetivo = 0;
  let totalKGMS = 0;
  const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
    const kgMs = parseFloat(livraria.kgMs);
    const teorFDNEfetivo = parseFloat(livraria.fdn_efetivo);
    const conta = kgMs * teorFDNEfetivo;
    const FDNEfetivo = conta / 100;
    totalFDNEfetivo += FDNEfetivo;
    const fdnEfetivoFormatado = parseFloat(FDNEfetivo.toFixed(2));
    totalKGMS += kgMs;
    return { ...livraria, fdnEfetivoFormatado };
  });

  updateDieta("selectedLivrarias", updatedLivrarias);

  const total = totalFDNEfetivo / totalKGMS;
  const totalPorcentagem = total * 100

  return totalPorcentagem; 

  }

  const calcularFDNEfetivoTotal = (FDNEfetivoAlimentos) => {
          
    const fdnEfetivoFormatadoTotal = FDNEfetivoAlimentos
    setFdnEfetivoTotal(fdnEfetivoFormatadoTotal.toFixed(2));
    return fdnEfetivoFormatadoTotal.toFixed(2);
        };
    
  //==> PDR <==
  const calcularPDRAlimentos = () => {
    let totalPDR = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const teorPB = parseFloat(livraria.pb)
      const kgMs = parseFloat(livraria.kgMs);
      const teorPDR = parseFloat(livraria.pdr);
      const pdrConta = teorPB * teorPDR 
      const pdrContaPorcentagem = pdrConta / 100
      const conta = pdrContaPorcentagem * kgMs
      const contaPorcentagem = conta / 100
      totalPDR += contaPorcentagem;
      totalKGMS += kgMs;
      const pdrFormatado = parseFloat(contaPorcentagem.toFixed(2));


      return { ...livraria, pdrFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalPDR / totalKGMS;

    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularPDRTotal = (PDRAlimentos) => {
    const pdrFormatadoTotal = parseFloat(PDRAlimentos.toFixed(2));
    setPDRTotal(pdrFormatadoTotal);
    return pdrFormatadoTotal;
  };
  

    //==> Proteina Soluvel <==

    const calcularProteinaSoluvelAlimentos = () => {
      let totalProteinaSoluvel = 0;
      let totalKGMS = 0;
      const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
        const kgMs = parseFloat(livraria.kgMs);
        const teorProteinaSoluvel = parseFloat(livraria.proteina_soluvel);
        const conta = kgMs * teorProteinaSoluvel;
        const proteinaBruta = conta / 100;
        totalProteinaSoluvel += proteinaBruta;
        totalKGMS += kgMs;
        const proteinaSoluvelFormatado = parseFloat(proteinaBruta.toFixed(2));

        return { ...livraria, proteinaSoluvelFormatado };
      });
    
      updateDieta("selectedLivrarias", updatedLivrarias);
    
      const total = totalProteinaSoluvel / totalKGMS;
      const totalPorcentagem = total * 100;
    
      return totalPorcentagem;
    };
    
    const calcularProteinaSoluvelTotal = (ProteinaSoluvelAlimentos) => {
      const proteinaSoluvelFormatadoTotal = parseFloat(ProteinaSoluvelAlimentos.toFixed(2));
      setProteinaSoluvelTotal(proteinaSoluvelFormatadoTotal);
      return proteinaSoluvelFormatadoTotal;
    };
    
  
 
  // ==> NDT <==

  const calcularNDTAlimentos = () => {
    let totalNDT = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorNDT = parseFloat(livraria.ndt);
      const conta = kgMs * teorNDT;
      const proteinaBruta = conta / 100;
      totalNDT += proteinaBruta;
      totalKGMS += kgMs;
      const ndtFormatado = parseFloat(proteinaBruta.toFixed(2));

      return { ...livraria, ndtFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalNDT / totalKGMS;
    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularNDTTotal = (NDTAlimentos) => {
    const ndtFormatadoTotal = parseFloat(NDTAlimentos.toFixed(2));
    setNDTTotal(ndtFormatadoTotal);
    return ndtFormatadoTotal;
  };
  
  // ==> FDN <==

  const calcularItemFDNAlimentos = () => {
    let totalItemFDN = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorItemFDN = parseFloat(livraria.fdn);
      const conta = kgMs * teorItemFDN;
      const proteinaBruta = conta / 100;
      totalItemFDN += proteinaBruta;
      totalKGMS += kgMs;
      const fdnFormatado = parseFloat(proteinaBruta.toFixed(2));

      return { ...livraria, fdnFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalItemFDN / totalKGMS;
    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularItemFDNTotal = (ItemFDNAlimentos) => {
    const fdnFormatadoTotal = parseFloat(ItemFDNAlimentos.toFixed(2));
    setItemFDNTotal(fdnFormatadoTotal);
    return fdnFormatadoTotal;
  };
  
  // ==> CNF <==

  const calcularCNFAlimentos = () => {
    let totalCNF = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorCNF = parseFloat(livraria.cnf);
      const conta = kgMs * teorCNF;
      const proteinaBruta = conta / 100;
      totalCNF += proteinaBruta;
      totalKGMS += kgMs;
      const cnfFormatado = parseFloat(proteinaBruta.toFixed(2));

      return { ...livraria, cnfFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalCNF / totalKGMS;
    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularCNFTotal = (CNFAlimentos) => {
    const cnfFormatadoTotal = parseFloat(CNFAlimentos.toFixed(2));
    setCNFTotal(cnfFormatadoTotal);
    return cnfFormatadoTotal;
  };
  
  // ==> AMIDO <==

  const calcularAMIDOAlimentos = () => {
    let totalAMIDO = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorAMIDO = parseFloat(livraria.amido);
      const conta = kgMs * teorAMIDO;
      const proteinaBruta = conta / 100;
      totalAMIDO += proteinaBruta;
      totalKGMS += kgMs;
      const amidoFormatado = parseFloat(proteinaBruta.toFixed(2));
     
      return { ...livraria, amidoFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalAMIDO / totalKGMS;
    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularAMIDOTotal = (AMIDOAlimentos) => {
    const amidoFormatadoTotal = parseFloat(AMIDOAlimentos.toFixed(2));
    setAMIDOTotal(amidoFormatadoTotal);
    return amidoFormatadoTotal;
  };
  
  // ==> EE <==

  const calcularEEAlimentos = () => {
    let totalEE = 0;
    let totalKGMS = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorEE = parseFloat(livraria.ee);
      const conta = kgMs * teorEE;
      const proteinaBruta = conta / 100;
      totalEE += proteinaBruta;
      totalKGMS += kgMs;
      const eeFormatado = parseFloat(proteinaBruta.toFixed(2));
   
      return { ...livraria, eeFormatado };
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  
    const total = totalEE / totalKGMS;
    const totalPorcentagem = total * 100;
  
    return totalPorcentagem;
  };
  
  const calcularEETotal = (EEAlimentos) => {
    const eeFormatadoTotal = parseFloat(EEAlimentos.toFixed(2));
    setEETotal(eeFormatadoTotal);
    return eeFormatadoTotal;
  };
  
  const calcularPNDRTotal = (valorPb, valorPDR) => {
    const pndrFormatadoTotal = valorPb - valorPDR
    setPNDRTotal(pndrFormatadoTotal);
    return pndrFormatadoTotal;
  };
  
    const calcularMSDieta = (msTotalDigitado, moTotal) => {
    const conta = msTotalDigitado / moTotal
    const multiplicacao = conta * 100
    setMsTotalDieta(multiplicacao.toFixed(2))
    return multiplicacao.toFixed(2)
  }

  useEffect(() => {
    calcularFDNTotal();
  }, [dieta.selectedLivrarias]);

  return (
    <AuthContext.Provider
      value={{
        token, 
        setToken,
        userName, 
        setUserName,
        userId, 
        setUserId,
        isAuth, 
        setIsAuth,
        dieta,
        updateDieta,
        calcularFDNAlimentos,
        calcularFDNTotal,
        calcularMateriaSecaExistente,
        calcularFracaoProteica,
        calcularMilhoEstimado,
        calcularMateriaSecaFaltando,
        calcularAmidoTotalNecessario,
        calcularPBAlimentos,
        calcularMateriaSecaExistente2,
        calcularMOIndividualAlimentos,
        calcularPBTotal,
        calcularPNDRTotal,
        calcularPDRAlimentos,
        calcularPDRTotal,
        calcularProteinaSoluvelAlimentos,
        calcularProteinaSoluvelTotal,
        calcularFDNEfetivoAlimentos,
        calcularFDNEfetivoTotal,
        calcularPNDRTotal,
        calcularNDTAlimentos,
        calcularNDTTotal,
        calcularItemFDNAlimentos,
        calcularItemFDNTotal,
        calcularCNFAlimentos,
        calcularCNFTotal,
        calcularAMIDOAlimentos, 
        calcularAMIDOTotal,
        calcularEEAlimentos,
        calcularEETotal,
        calcularMSDieta,
        msTotalDieta,
        nomeDieta,
        setNomeDieta,
        pesoMedio,
        setPesoMedio,
        producaoEstimada,
        setProducaoEstimada,
        del,
        setDel,
        fillPreenchimentoRuminal,
        setFillPreenchimentoRuminal,
        ims,
        setIms,
        fdn,
        setFdn,
        livrariasSelecionadas,
        handleAddLivraria,
        milhoEstimado,
        materiaSecaExistente,
        fracaoProteica,
        mineral,
        calcularMineral,
        materiaSecaFaltando,
        loading,
        setLoading,
        moTotal,
        pbTotal,
        pndrTotal,
        pdrTotal,
        proteinaSoluvelTotal,
        fdnEfetivoTotal,    
        pbTotal,
        pndrTotal,
        ndtTotal,
        itemFDNTotal,
        cnfTotal,
        amidoTotal,
        eeTotal,
        msTotalDigitado,
        calcularMSDieta,
        userEmail, 
        setUserEmail,
        userCreatedAt, 
        setUserCreatedAt
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
