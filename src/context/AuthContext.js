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

 
  const calcularMOTotalAlimentos = () => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorMS = parseFloat(livraria.ms);
      console.log("Kilos que o produtor digitou " + kgMs)
      console.log("teor de materia seca " + teorMS)
      const divisao =  kgMs / teorMS;
      const materiaOrganica = divisao * 100 ;
      const materiaOrganicaFormatada = materiaOrganica.toFixed(2)
      console.log("MO por alimentos " + materiaOrganicaFormatada)
      return { ...livraria, materiaOrganicaFormatada };
    });
    updateDieta("selectedLivrarias", updatedLivrarias);
  };

  const calcularMOIndividualAlimentos = () => {
    const updatedLivrarias = dieta.selectedLivrarias.map(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      const teorMS = parseFloat(livraria.ms);
  
      if (!isNaN(kgMs) && !isNaN(teorMS) && teorMS !== 0) {
        const divisao = kgMs / (teorMS / 100);
        const materiaOrganica = divisao;
        const materiaOrganicaFormatada = materiaOrganica.toFixed(2);
        
        console.log(`MO para ${livraria.nome}: ${materiaOrganicaFormatada}`);
        return { ...livraria, materiaOrganicaFormatada };
      } else {
        console.log(`Dados inválidos para ${livraria.nome}`);
        return { ...livraria, materiaOrganicaFormatada: '0.00' };
      }
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
    return pbFormatadoTotal;
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
        calcularMOTotalAlimentos,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
