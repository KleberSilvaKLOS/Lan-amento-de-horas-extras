# Horas Extras

Este projeto é um aplicativo desenvolvido com [Expo](https://expo.dev) e [React Native](https://reactnative.dev) para facilitar o registro e o controle das horas extras realizadas por funcionários.

## Objetivo

O objetivo principal do aplicativo é permitir que o usuário registre facilmente suas horas extras, informando data, horário de início, horário de término e uma breve descrição. Além disso, o app possibilita a exportação dos registros em formato texto, facilitando o envio ou armazenamento dos dados.

## Funcionalidades

- **Cadastro de horas extras:** Informe data, horário de início, horário de término e descrição da atividade.
- **Visualização dos lançamentos:** Veja a lista de todas as horas extras cadastradas.
- **Filtro por período:** Exporte os registros de horas extras filtrando por intervalo de datas.
- **Exportação dos dados:** Gere um texto com os lançamentos filtrados para copiar ou compartilhar.

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o aplicativo:

   ```bash
   npx expo start
   ```

3. Escolha abrir no emulador Android, iOS ou no navegador (web).

## Estrutura do Projeto

- **app/**: Contém os arquivos principais do aplicativo e as telas.
- **components/**: Componentes reutilizáveis da interface.
- **hooks/**: Hooks personalizados para o projeto.
- **constants/**: Constantes de configuração, como cores.
- **assets/**: Imagens e fontes utilizadas no app.

## Exportação dos dados

Na tela principal, é possível filtrar os lançamentos por período e gerar um texto com os dados das horas extras, pronto para ser copiado ou compartilhado.

## Tecnologias utilizadas

- Expo
- React Native
- TypeScript

## Futuras melhorias

- Exportação em PDF ou Excel.
- Sincronização com nuvem.
- Autenticação de usuário.
- Notificações de lembrete.

---

Projeto em
