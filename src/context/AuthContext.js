import React, { createContext, useContext, useState } from "react";
import Toast from "react-native-toast-message";

const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [livrariasSelecionadas, setLivrariasSelecionadas] = useState([0]);

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
    peso_medio: "",
    producao_estimada: "",
    del: "",
    fill_preenchimento_ruminal: "",
    ims: 0,
    fdn: 0,
    selectedLivrarias: [], // tentativa
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

  const calcularIMS_FDN = () => {
    const { peso_medio, producao_estimada, del, fill_preenchimento_ruminal } =
      dieta;
    const peso = parseFloat(peso_medio.replace(",", "."));
    const producao = parseFloat(producao_estimada.replace(",", "."));
    const dell = parseInt(del);
    const fill = parseFloat(fill_preenchimento_ruminal.replace(",", "."));

    const ims = (peso * 0.02) + (producao / 3);
    const fdn = peso * fill;

    updateDieta("ims", ims.toFixed(2));
    updateDieta("fdn", fdn.toFixed(2));
  };

  return (
    <AuthContext.Provider
      value={{
        dieta,
        updateDieta,
        calcularIMS_FDN,
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
        handleAddLivraria
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
