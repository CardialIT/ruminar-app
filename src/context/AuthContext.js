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

  const [pbTotal, setPBTotal] = useState(0);
  const [pndrTotal, setPNDRTotal] = useState(0);
  const [pdrTotal, setPDRTotal] = useState(0);
  const [proteinaSoluvelTotal, setProteinaSoluvelTotal] = useState(0);
  const [fdnEfetivoTotal, setFdnEfetivoTotal] = useState(0);

  

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
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorMS = parseFloat(livraria.ms);
  
     
        const materiaOrganica = kgMs * (teorMS / 100);
        const materiaOrganicaFormatada = materiaOrganica.toFixed(2);
  
        console.log(`MO para ${livraria.nome}: ${materiaOrganicaFormatada}`);
        return { ...livraria, materiaOrganicaFormatada };
     
    });
  
    updateDieta("selectedLivrarias", updatedLivrarias);
  };
  
//==> PB <==

  const calcularPBAlimentos = () => {
    let totalPB = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorPB = parseFloat(livraria.pb);
      const conta = kgMs * teorPB;
      const proteinaBruta = conta / 100;
      totalPB += proteinaBruta;
      const pbFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("PB por alimentos " + pbFormatado);
      return { ...livraria, pbFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalPB;
  };

  const calcularPBMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const pbFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PB AQUI Milho " + pbFormatadoMilho);
      return { ...livraria, pbFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };


  const calcularPBFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const pbFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("PB AQUI FP " + pbFormatadoFP);
      return { ...livraria, pbFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };


  const calcularPBTotal = (PBAlimentos, materiaSecaExistente) => {
    
    const divisaoCalculoPBTotal = PBAlimentos / materiaSecaExistente
    const calculoPBTotal = divisaoCalculoPBTotal * 100

    const pbFormatadoTotal = parseFloat(calculoPBTotal.toFixed(2))

    console.log("CALCULO PB TOTAL " + pbFormatadoTotal.toFixed(2))

    setPBTotal(pbFormatadoTotal);
    return pbFormatadoTotal;
  };

//==> PNDR <==
  const calcularPNDRAlimentos = () => {
    let totalPNDR = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorPNDR = parseFloat(livraria.pndr);
      const conta = kgMs * teorPNDR;
      const proteinaBruta = conta / 100;
      totalPNDR += proteinaBruta;
      const pndrFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("PNDR por alimentos " + pndrFormatado);
      return { ...livraria, pndrFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalPNDR;
  };

  const calcularPNDRMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const pndrFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PNDR AQUI Milho " + pndrFormatadoMilho);
      return { ...livraria, pndrFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularPNDRFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const pndrFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("PNDR AQUI FP " + pndrFormatadoFP);
      return { ...livraria, pndrFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularPNDRTotal = (PNDRAlimentos, materiaSecaExistente) => {

    const divisaoCalculoPNDRTotal = PNDRAlimentos / materiaSecaExistente
    const calculoPNDRTotal = divisaoCalculoPNDRTotal * 100

    const pndrFormatadoTotal = parseFloat(calculoPNDRTotal.toFixed(2))

    console.log("CALCULO PNDRTOTAL " + pndrFormatadoTotal.toFixed(2))

    setPNDRTotal(pndrFormatadoTotal);
    return pndrFormatadoTotal;
  };

  //==> PDR <==

  const calcularPDRAlimentos = () => {
    let totalPDR = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorPDR = parseFloat(livraria.pdr);
      const conta = kgMs * teorPDR;
      const proteinaBruta = conta / 100;
      totalPDR += proteinaBruta;
      const pdrFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("PDR por alimentos " + pdrFormatado);
      return { ...livraria, pdrFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalPDR;
  }

  const calcularPDRMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const pdrFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PDR AQUI Milho " + pdrFormatadoMilho);
      return { ...livraria, pdrFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  }

  const calcularPDRFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const pdrFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("PDR AQUI FP " + pdrFormatadoFP);
      return { ...livraria, pdrFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  }

  const calcularPDRTotal = (PDRAlimentos, materiaSecaExistente) => {
      
      const divisaoCalculoPDRTotal = PDRAlimentos / materiaSecaExistente
      const calculoPDRTotal = divisaoCalculoPDRTotal * 100
  
      const pdrFormatadoTotal = parseFloat(calculoPDRTotal.toFixed(2))
  
      console.log("CALCULO PDRTOTAL " + pdrFormatadoTotal.toFixed(2))
  
      setPDRTotal(pdrFormatadoTotal);
      return pdrFormatadoTotal;
    };

    //==> Proteina Soluvel <==

    const calcularProteinaSoluvelAlimentos = () => {
      let totalProteinaSoluvel = 0;
      const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
        const kgMs = parseFloat(livraria.kgMs);
        const teorProteinaSoluvel = parseFloat(livraria.proteina_soluvel);
        const conta = kgMs * teorProteinaSoluvel;
        const proteinaBruta = conta / 100;
        totalProteinaSoluvel += proteinaBruta;
        const proteinaSoluvelFormatado = parseFloat(proteinaBruta.toFixed(2));
        console.log("Proteina Soluvel por alimentos " + proteinaSoluvelFormatado);
        return { ...livraria, proteinaSoluvelFormatado };
      });
      updateDieta("selectedLivrarias", updatedLivrarias);
      return totalProteinaSoluvel;
    }

    const calcularProteinaSoluvelMilho = (milhoEstimado) => {
      const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
        console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
        const milho = parseFloat(milhoEstimado);
        const conta = milho * 0.09;
        const proteinaBrutaMilho = conta / 100 ;
        const proteinaSoluvelMilho = proteinaBrutaMilho.toFixed(2)
        console.log("Proteina Soluvel AQUI Milho " + proteinaSoluvelMilho);
        return { ...livraria, proteinaSoluvelMilho };
      });
      updateDieta("selectedLivrarias", updatedLivrarias);
    }

    const calcularProteinaSoluvelFracaoProteica = (fracaoProteica) => {
      const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
        console.log("FRACAO PROTEICA" + fracaoProteica)
        const conta =  fracaoProteica * 0.52
        const proteinaBrutaFP = conta / 100;
        const proteinaSoluvelFP = proteinaBrutaFP.toFixed(2)
        console.log("Proteina Soluvel AQUI FP " + proteinaSoluvelFP);
        return { ...livraria, proteinaSoluvelFP };
      });
      updateDieta("selectedLivrarias", updatedLivrarias);
    }

    const calcularProteinaSoluvelTotal = (ProteinaSoluvelAlimentos, materiaSecaExistente) => {
          
          const divisaoCalculoProteinaSoluvelTotal = ProteinaSoluvelAlimentos / materiaSecaExistente
          const calculoProteinaSoluvelTotal = divisaoCalculoProteinaSoluvelTotal * 100
      
          const proteinaSoluvelFormatadoTotal = parseFloat(calculoProteinaSoluvelTotal.toFixed(2))
      
          console.log("CALCULO Proteina Soluvel TOTAL " + proteinaSoluvelFormatadoTotal.toFixed(2))
      
          setProteinaSoluvelTotal(proteinaSoluvelFormatadoTotal);
          return proteinaSoluvelFormatadoTotal;
        };
   
  //==> FDN Efetivo <==      

  const calcularFDNEfetivoAlimentos = () => {
    let totalFDNEfetivo = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorFDNEfetivo = parseFloat(livraria.fdn_efetivo);
      const conta = kgMs * teorFDNEfetivo;
      const FDNBruto = conta / 100;
      totalFDNEfetivo += FDNBruto;
      const fdnEfetivoFormatado = parseFloat(FDNBruto.toFixed(2));
      console.log("FDN Efetivo por alimentos " + fdnEfetivoFormatado);
      return { ...livraria, fdnEfetivoFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalFDNEfetivo;
  }

  const calcularFDNEfetivoMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const FDNBrutoMilho = conta / 100 ;
      const fdnEfetivoMilho = FDNBrutoMilho.toFixed(2)
      console.log("FDN Efetivo AQUI Milho " + fdnEfetivoMilho);
      return { ...livraria, fdnEfetivoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  }

  const calcularFDNEfetivoFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const FDNBrutoFP = conta / 100;
      const fdnEfetivoFP = FDNBrutoFP.toFixed(2)
      console.log("FDN Efetivo AQUI FP " + fdnEfetivoFP);
      return { ...livraria, fdnEfetivoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  }

  const calcularFDNEfetivoTotal = (FDNEfetivoAlimentos, materiaSecaExistente) => {
          
          const divisaoCalculoFDNEfetivoTotal = FDNEfetivoAlimentos / materiaSecaExistente
          const calculoFDNEfetivoTotal = divisaoCalculoFDNEfetivoTotal * 100
      
          const fdnEfetivoFormatadoTotal = parseFloat(calculoFDNEfetivoTotal.toFixed(2))
      
          console.log("CALCULO FDN Efetivo TOTAL " + fdnEfetivoFormatadoTotal.toFixed(2))
      
          setFdnEfetivoTotal(fdnEfetivoFormatadoTotal);
          return fdnEfetivoFormatadoTotal;
        };

  
  useEffect(() => {
    calcularFDNTotal();
  }, [dieta.selectedLivrarias]);

  return (
    <AuthContext.Provider
      value={{
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
        calcularPBMilho,
        calcularPBFracaoProteica,
        calcularMateriaSecaExistente2,
        calcularMOIndividualAlimentos,
        calcularPBTotal,
        calcularPNDRAlimentos,
        calcularPNDRMilho,
        calcularPNDRFracaoProteica,
        calcularPNDRTotal,
        calcularPDRAlimentos,
        calcularPDRMilho,
        calcularPDRFracaoProteica,
        calcularPDRTotal,
        calcularProteinaSoluvelAlimentos,
        calcularProteinaSoluvelMilho,
        calcularProteinaSoluvelFracaoProteica,
        calcularProteinaSoluvelTotal,
        calcularFDNEfetivoAlimentos,
        calcularFDNEfetivoMilho,
        calcularFDNEfetivoFracaoProteica,
        calcularFDNEfetivoTotal,
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
        pbTotal,
        pndrTotal,
        pdrTotal,
        proteinaSoluvelTotal,
        fdnEfetivoTotal,    
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
