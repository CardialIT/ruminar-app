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
  const [ndtTotal, setNDTTotal] = useState(0);
  const [itemFDNTotal, setItemFDNTotal] = useState(0);
  const [cnfTotal, setCNFTotal] = useState(0);
  const [amidoTotal, setAMIDOTotal] = useState(0);
  const [eeTotal, setEETotal] = useState(0);

  

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

  // ==> NDT <==

  const calcularNDTAlimentos = () => {
    let totalNDT = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorNDT = parseFloat(livraria.ndt);
      const conta = kgMs * teorNDT;
      const proteinaBruta = conta / 100;
      totalNDT += proteinaBruta;
      const ndtFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("NDT por alimentos " + ndtFormatado);
      return { ...livraria, ndtFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalNDT;
  };

  const calcularNDTMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const ndtFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PNDR AQUI Milho " + ndtFormatadoMilho);
      return { ...livraria, ndtFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularNDTFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const ndtFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("NDT AQUI FP " + ndtFormatadoFP);
      return { ...livraria, ndtFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularNDTTotal = (NDTAlimentos, materiaSecaExistente) => {

    const divisaoCalculoNDTTotal = NDTAlimentos / materiaSecaExistente
    const calculoNDTTotal = divisaoCalculoNDTTotal * 100

    const ndtFormatadoTotal = parseFloat(calculoNDTTotal.toFixed(2))

    console.log("CALCULO NDTTOTAL " + ndtFormatadoTotal.toFixed(2))

    setNDTTotal(ndtFormatadoTotal);
    return ndtFormatadoTotal;
  };

  // ==> FDN <==

  const calcularItemFDNAlimentos = () => {
    let totalItemFDN = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorItemFDN = parseFloat(livraria.ndt);
      const conta = kgMs * teorItemFDN;
      const proteinaBruta = conta / 100;
      totalItemFDN += proteinaBruta;
      const fdnFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("ItemFDN por alimentos " + fdnFormatado);
      return { ...livraria, fdnFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalItemFDN;
  };

  const calcularItemFDNMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const ndtFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PNDR AQUI Milho " + ndtFormatadoMilho);
      return { ...livraria, ndtFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularItemFDNFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const fdnFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("Total Item FDN AQUI FP " + fdnFormatadoFP);
      return { ...livraria, fdnFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularItemFDNTotal = (ItemFDNAlimentos, materiaSecaExistente) => {

    const divisaoCalculoItemFDNTotal = ItemFDNAlimentos / materiaSecaExistente
    const calculoItemFDNTotal = divisaoCalculoItemFDNTotal * 100

    const fdnFormatadoTotal = parseFloat(calculoItemFDNTotal.toFixed(2))

    console.log("CALCULO TotalFDN TOTAL " + fdnFormatadoTotal.toFixed(2))

    setItemFDNTotal(fdnFormatadoTotal);
    return fdnFormatadoTotal;
  };

  // ==> CNF <==

  const calcularCNFAlimentos = () => {
    let totalCNF = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorCNF = parseFloat(livraria.ndt);
      const conta = kgMs * teorCNF;
      const proteinaBruta = conta / 100;
      totalCNF += proteinaBruta;
      const cnfFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("CNF por alimentos " + cnfFormatado);
      return { ...livraria, cnfFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalCNF;
  };

  const calcularCNFMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const cnfFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("CNFR AQUI Milho " + cnfFormatadoMilho);
      return { ...livraria, cnfFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularCNFFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const cnfFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("NDT AQUI FP " + cnfFormatadoFP);
      return { ...livraria, cnfFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularCNFTotal = (CNFAlimentos, materiaSecaExistente) => {

    const divisaoCalculoCNFTotal = CNFAlimentos / materiaSecaExistente
    const calculoCNFTotal = divisaoCalculoCNFTotal * 100

    const cnfFormatadoTotal = parseFloat(calculoCNFTotal.toFixed(2))

    console.log("CALCULO CNFTOTAL " + cnfFormatadoTotal.toFixed(2))

    setCNFTotal(cnfFormatadoTotal);
    return cnfFormatadoTotal;
  }; 
  
  // ==> AMIDO <==

  const calcularAMIDOAlimentos = () => {
    let totalAMIDO = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorAMIDO = parseFloat(livraria.ndt);
      const conta = kgMs * teorAMIDO;
      const proteinaBruta = conta / 100;
      totalAMIDO += proteinaBruta;
      const amidoFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("AMIDO por alimentos " + amidoFormatado);
      return { ...livraria, amidoFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalAMIDO;
  };

  const calcularAMIDOMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const amidoFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("AMIDOR AQUI Milho " + amidoFormatadoMilho);
      return { ...livraria, amidoFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularAMIDOFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const amidoFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("AMIDO AQUI FP " + amidoFormatadoFP);
      return { ...livraria, amidoFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularAMIDOTotal = (AMIDOAlimentos, materiaSecaExistente) => {

    const divisaoCalculoAMIDOTotal = AMIDOAlimentos / materiaSecaExistente
    const calculoAMIDOTotal = divisaoCalculoAMIDOTotal * 100

    const amidoFormatadoTotal = parseFloat(calculoAMIDOTotal.toFixed(2))

    console.log("CALCULO AMIDOTOTAL " + amidoFormatadoTotal.toFixed(2))

    setAMIDOTotal(amidoFormatadoTotal);
    return amidoFormatadoTotal;
  }; 

  // ==> EE <==

  const calcularEEAlimentos = () => {
    let totalEE = 0;
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorEE = parseFloat(livraria.ee);
      const conta = kgMs * teorEE;
      const proteinaBruta = conta / 100;
      totalEE += proteinaBruta;
      const eeFormatado = parseFloat(proteinaBruta.toFixed(2));
      console.log("EE por alimentos " + eeFormatado);
      return { ...livraria, eeFormatado };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
    return totalEE;
  };

  const calcularEEMilho = (milhoEstimado) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("MILHO ESTIMADO AQUI" + milhoEstimado)
      const milho = parseFloat(milhoEstimado);
      const conta = milho * 0.09;
      const proteinaBrutaMilho = conta / 100 ;
      const eeFormatadoMilho = proteinaBrutaMilho.toFixed(2)
      console.log("PNDR AQUI Milho " + eeFormatadoMilho);
      return { ...livraria, eeFormatadoMilho };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularEEFracaoProteica = (fracaoProteica) => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      console.log("FRACAO PROTEICA" + fracaoProteica)
      const conta =  fracaoProteica * 0.52
      const proteinaBrutaFP = conta / 100;
      const eeFormatadoFP = proteinaBrutaFP.toFixed(2)
      console.log("EE AQUI FP " + eeFormatadoFP);
      return { ...livraria, eeFormatadoFP };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularEETotal = (EEAlimentos, materiaSecaExistente) => {

    const divisaoCalculoEETotal = EEAlimentos / materiaSecaExistente
    const calculoEETotal = divisaoCalculoEETotal * 100

    const eeFormatadoTotal = parseFloat(calculoEETotal.toFixed(2))

    console.log("CALCULO EETOTAL " + eeFormatadoTotal.toFixed(2))

    setEETotal(eeFormatadoTotal);
    return eeFormatadoTotal;
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
        calcularNDTAlimentos,
        calcularNDTMilho,
        calcularNDTFracaoProteica,
        calcularNDTTotal,
        calcularItemFDNAlimentos,
        calcularItemFDNMilho,
        calcularItemFDNFracaoProteica,
        calcularItemFDNTotal,
        calcularCNFAlimentos,
        calcularCNFMilho,
        calcularCNFFracaoProteica,
        calcularCNFTotal,
        calcularAMIDOAlimentos,
        calcularAMIDOMilho,
        calcularAMIDOFracaoProteica,
        calcularAMIDOTotal,
        calcularEEAlimentos,
        calcularEEMilho,
        calcularEEFracaoProteica,
        calcularEETotal,
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
        ndtTotal,
        itemFDNTotal,
        cnfTotal,
        amidoTotal,
        eeTotal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
