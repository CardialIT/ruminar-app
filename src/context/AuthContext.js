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

  const calcularMilhoEstimado = (amidoEstimado) => {
    let totalAmidoExistente = 0;
    dieta.selectedLivrarias.forEach(livraria => {
      const kgMs = parseFloat(livraria.kgMs);
      console.log("kgMs" + kgMs);
      const teorAmido = parseFloat(livraria.amido);
      console.log("teorAmido" + teorAmido);
      totalAmidoExistente += kgMs * (teorAmido / 100);
    });

    const amidoTotalNecessario = ims * (amidoEstimado / 100);
    const amidoFaltando = amidoTotalNecessario - totalAmidoExistente;
    const milhoEstimado = amidoFaltando / 0.72;

    setMilhoEstimado(milhoEstimado.toFixed(2));
  };

  const calcularMateriaSecaExistente = () => {
    const kgMsTotal = dieta.selectedLivrarias.reduce((acc, livraria) => acc + parseFloat(livraria.kgMs), 0);
    const totalMateriaSecaExistente = kgMsTotal + parseFloat(milhoEstimado) + parseFloat(mineral) + parseFloat(fracaoProteica);
    setMateriaSecaExistente(totalMateriaSecaExistente.toFixed(2));
  };

  const calcularFracaoProteica = () => {
    const totalFracaoProteica = (parseFloat(ims) - parseFloat(materiaSecaExistente)) / 2;
    setFracaoProteica(totalFracaoProteica.toFixed(2));
  };


  const calcularMineral = () => {
    const { producao_estimada } = dieta;
    console.log("producao estimada"+producao_estimada)
    const mineralCalculado = producao_estimada * 0.014;
    setMineral(mineralCalculado.toFixed(2));
    console.log("mineral" + mineral)
  };

  const calcularMateriaSecaFaltando = () => {
    const materiaSecaFaltando = parseFloat(ims) - parseFloat(materiaSecaExistente);
    setMateriaSecaFaltando(materiaSecaFaltando.toFixed(2));
  };
  


  useEffect(() => {
    calcularFDNTotal();
  }, [dieta.selectedLivrarias]);

  useEffect(() => {
    calcularMateriaSecaExistente();
  }, [dieta.selectedLivrarias, milhoEstimado, fracaoProteica, mineral]);

  useEffect(() => {
    calcularFracaoProteica();
  }, [ims, materiaSecaExistente]);

  useEffect(() => {
    calcularMateriaSecaFaltando();
  }, [ims, materiaSecaExistente]);
  

  return (
    <AuthContext.Provider
      value={{
        dieta,
        updateDieta,
        calcularFDNAlimentos,
        calcularFDNTotal,
        calcularMilhoEstimado,
        calcularMateriaSecaFaltando,
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
        materiaSecaFaltando,,
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
