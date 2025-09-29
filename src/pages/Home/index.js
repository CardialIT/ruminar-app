import { View, TouchableOpacity, Image, Text, ScrollView, Modal, Linking, Alert } from "react-native";
import React, {useState} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContextProvider } from "../../context/AuthContext"
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const navigation = useNavigation();

  const { userName, setIsAuth, setToken } = useContextProvider();

  // Lista de vídeos
  const videos = [
    {
      id: 1,
      title: "Vídeo 1 - Introdução e objetivos do aplicativo",
      url: "https://drive.google.com/file/d/1swbGPZYtFx88SdkFUBuqySRDoiCTx5L-/view?usp=sharing",
      description: "Conheça os objetivos e funcionalidades principais do app"
    },
    {
      id: 2,
      title: "Vídeo 2 - A energia da dieta",
      url: "https://drive.google.com/file/d/1zBECTwt2eNSuOucsuxaEdbvru_aMzWQr/view?usp=sharing",
      description: "Entenda como calcular a energia necessária"
    },
    {
      id: 3,
      title: "Vídeo 3 - Proteína bruta",
      url: "https://drive.google.com/file/d/1wBZhzXxgPhYzj6hEXzQetPT9_GXGCKSl/view?usp=sharing",
      description: "Aprenda sobre a importância da proteína bruta"
    },
    {
      id: 4,
      title: "Vídeo 4 - Amido",
      url: "https://drive.google.com/file/d/1DM-weqxNCtES37EUBOrZrReiqkf4TPBv/view?usp=sharing",
      description: "Saiba como trabalhar com amido na dieta"
    },
    {
      id: 5,
      title: "Vídeo 5 - Revisão dos conteúdos abordados",
      url: "https://drive.google.com/file/d/1uEY7oExWg1qV_m4KhtT-EQFhDCS2xXTI/view?usp=sharing",
      description: "Revisão geral dos conceitos nutricionais"
    },
    {
      id: 6,
      title: "Vídeo 6 - Conhecendo o App Ruminar Leite",
      url: "https://drive.google.com/file/d/1i-21RtjLy7JOlb6fdvVmfEkm5Xqivdx3/view?usp=sharing",
      description: "Tour completo pelas funcionalidades do aplicativo"
    },
    {
      id: 7,
      title: "Vídeo 7 - Cadastrando alimentos na livraria",
      url: "https://drive.google.com/file/d/1LOHDObZhnpn-4dVCw4J72AvW99eU1uOi/view?usp=sharing",
      description: "Passo a passo para adicionar novos alimentos"
    },
    {
      id: 8,
      title: "Vídeo 8 - Iniciando a dieta base",
      url: "https://drive.google.com/file/d/1x8tmbdfJAPiN8bEdM2ZAnR--iFvoaMP1/view?usp=drive_link",
      description: "Como criar sua primeira dieta base"
    },
    {
      id: 9,
      title: "Vídeo 9 - Como fazer a dieta da propriedade",
      url: "https://drive.google.com/file/d/1tEf-PJ6qxgjgP0slOBiiv6NyuPIm7bGq/view?usp=sharing",
      description: "Personalize a dieta para sua propriedade"
    },
    {
      id: 10,
      title: "Vídeo 10 - Dieta para alta lactação",
      url: "https://drive.google.com/file/d/1lvXuq0oFcITTSumeUV2h5hbMU--jVJKh/view?usp=sharing",
      description: "Otimize a nutrição para alta produção de leite"
    },
    {
      id: 11,
      title: "Vídeo 11 - Calculando o custo da dieta",
      url: "https://drive.google.com/file/d/19awnGtdIRZwjEJ7Z6CPIImxfOSF5F1_p/view?usp=sharing",
      description: "Aprenda a calcular custos e otimizar gastos"
    },
    {
      id: 12,
      title: "Vídeo 12 - Como hidratar a dieta",
      url: "https://drive.google.com/file/d/1HCcOH98fWsFPwDGQ0vQMSb8qpDy4FI84/view?usp=sharing",
      description: "Calcule a quantidade de água necessária"
    }
  ];

  function logout() {
    setIsAuth(false);
    setToken("");
  }

  function handleAccept() {
    setModalVisible(false);
  }

  function handleDecline() {
    setIsAuth(false);
    setToken("");
  }

  function openVideoModal() {
    setVideoModalVisible(true);
  }

  function closeVideoModal() {
    setVideoModalVisible(false);
  }

  async function openVideo(video) {
    try {
      const supported = await Linking.canOpenURL(video.url);
      if (supported) {
        await Linking.openURL(video.url);
      } else {
        Alert.alert("Erro", "Não foi possível abrir o vídeo");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar abrir o vídeo");
    }
  }

  return (
    <View style={styles.container}>
      {/* Modal de aceite de termos */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          logout();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              O RESULTADO PRODUTIVO É BASEADO NO MANEJO NUTRICIONAL COMO UM TODO. AO CLICAR EM ACEITAR, O PRODUTOR/TÉCNICO SE RESPONSABILIZA PELA EXECUÇÃO DOS DADOS NUTRICIONAIS FORMULADOS NESTE APLICATIVO.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.buttonModal} onPress={handleAccept}>
                <Text style={styles.buttonModalText}>Aceitar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonModalDecline} onPress={handleDecline}>
                <Text style={styles.buttonModalText}>Recusar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de vídeos tutoriais */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={videoModalVisible}
        onRequestClose={closeVideoModal}
      >
        <View style={styles.videoModalContainer}>
          <View style={styles.videoModalHeader}>
            <TouchableOpacity onPress={closeVideoModal}>
              <Feather name="x" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.videoModalTitle}>Vídeos Tutoriais</Text>
          </View>

          <ScrollView style={styles.videoListContainer} contentContainerStyle={styles.videoListContent}>
            <Text style={styles.sectionTitle}>Conceitos Nutricionais</Text>
            {videos.slice(0, 5).map((video) => (
              <TouchableOpacity
                key={video.id}
                style={styles.videoItem}
                onPress={() => openVideo(video)}
              >
                <View style={styles.videoItemIcon}>
                  <Feather name="play-circle" size={32} color="#4CAF50" />
                </View>
                <View style={styles.videoItemContent}>
                  <Text style={styles.videoItemTitle}>{video.title}</Text>
                  <Text style={styles.videoItemDescription}>{video.description}</Text>
                </View>
                <Feather name="external-link" size={20} color="#666" />
              </TouchableOpacity>
            ))}

            <Text style={styles.sectionTitle}>Como Usar o App</Text>
            {videos.slice(5).map((video) => (
              <TouchableOpacity
                key={video.id}
                style={styles.videoItem}
                onPress={() => openVideo(video)}
              >
                <View style={styles.videoItemIcon}>
                  <Feather name="play-circle" size={32} color="#4CAF50" />
                </View>
                <View style={styles.videoItemContent}>
                  <Text style={styles.videoItemTitle}>{video.title}</Text>
                  <Text style={styles.videoItemDescription}>{video.description}</Text>
                </View>
                <Feather name="external-link" size={20} color="#666" />
              </TouchableOpacity>
            ))}

            <View style={styles.infoBox}>
              <Feather name="info" size={20} color="#4CAF50" />
              <Text style={styles.infoText}>
                Os vídeos serão abertos no navegador ou no app do Google Drive
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.firstContainer}>
        <Text style={styles.textheader}>RUMINAR LEITE</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={openVideoModal} style={styles.tutorialButton}>
            <Feather name="play-circle" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Feather name="log-out" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Bem-vindo {userName}</Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Livraria")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Livraria</Text>
            <Text style={styles.imageSubtitle}>Adicione alimentos importantes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Resumo")}
        >
          <Image
            source={require("../../../assets/Cows.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Dietas base</Text>
            <Text style={styles.imageSubtitle}>Tenha uma ideia inicial de como será sua dieta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Dietas")}
        >
          <Image
            source={require("../../../assets/Cows-2.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Dietas da propriedade</Text>
            <Text style={styles.imageSubtitle}>Crie a dieta ideal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Financa")}
        >
          <Image
            source={require("../../../assets/Finance.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Finanças</Text>
            <Text style={styles.imageSubtitle}>Saiba quanto vai custar sua dieta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Agua")}
        >
          <Image
            source={require("../../../assets/Water.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Hidratação da dieta</Text>
            <Text style={styles.imageSubtitle}>Saiba quantos litros de água sua dieta precisa</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
