# Hotel Fazenda Sol Nascente - Aplicativo React Native

## Visão Geral

Este é um aplicativo **React Native** para o **Hotel Fazenda Sol Nascente**, um hotel fictício localizado em um ambiente natural. O aplicativo fornece uma interface simples e intuitiva para os usuários:

- Fazerem o cadastro e reservarem um quarto
- Fazerem check-in
- Fazerem check-out

## Recursos

- Imagem de fundo bonita do entorno do hotel
- Logotipo e título do hotel
- Três botões para:
  - **Fazer uma reserva** (navega para a tela "Escolher")
  - **Fazer check-in** (navega para a tela "Check-in")
  - **Fazer check-out** (navega para a tela "Check-out")

## Detalhes Técnicos

- Construído usando **React Native** e **JavaScript**
- Usa componentes React Native como `View`, `Text`, `ImageBackground`, `TouchableOpacity` e `Image`
- Estilos são definidos usando a API **StyleSheet** do React Native
- Navegação é tratada usando **React Navigation**

## Estrutura de Pastas

```bash
hotel-fazenda-sol-nascente/
│
├── assets/
│   └── # contém imagens usadas no aplicativo (imagem de fundo e logotipo do hotel)
│
├── components/
│   └── # contém componentes React reutilizáveis (não usado neste projeto)
│
├── screens/
│   ├── HomeScreen.js       # Tela inicial com opções de reserva, check-in e check-out
│   ├── ChooseScreen.js     # Tela para fazer reservas
│   ├── CheckInScreen.js    # Tela de check-in
│   └── CheckOutScreen.js   # Tela de check-out
│
├── App.js                  # Ponto de entrada do aplicativo
└── styles.js               # Define estilos globais para o aplicativo

```

## Clonando o repositório

Para clonar o repositório, siga os passos abaixo:

1. Abra o terminal ou comando do seu sistema operacional.
2. Digite o comando:

   ```bash
   git clone https://github.com/hlenarocha/hotel-fazenda-sol-nascente.git
```

3. Pressione Enter para executar o comando.
4. O repositório será clonado para a pasta atual.

## Fazendo Push para o Repositório
Para fazer push para o repositório, siga os passos abaixo:

1. Abra o terminal ou comando do seu sistema operacional.
2. Navegue para a pasta do repositório clonado usando o comando:

```bash
cd hotel-fazenda-sol-nascente
```

3. Faça as alterações necessárias no código do aplicativo.
4. Adicione as alterações ao staged do Git usando o comando:
   
```bash
git add .
```

5. Faça um commit das alterações usando o comando:

```bash
git commit -m "mensagem de commit"
```

6. Faça push para o repositório remoto usando o comando:

```bash
git push origin main
```
