# Decodificador-de-texto
Este projeto é uma aplicação web simples que criptografa e descriptografa textos usando um método específico de substituição de letras. Ele permite que você troque mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

## Descrição

### Regras de Criptografia:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

### Requisitos:

- A aplicação deve funcionar apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
- "gato" => "gaitober"
- "gaitober" => "gato"

### Extras:

- A aplicação possui um botão que copia o texto criptografado/descriptografado para a área de transferência, funcionando como um "Ctrl+C" ou a opção "copiar" dos aplicativos.

## Ferramentas Utilizadas

- **Visual Studio Code**: Editor de código usado para desenvolver o projeto.
- **HTML**: Estrutura básica da página web.
- **CSS**: Estilização da página web.
- **JavaScript**: Lógica de criptografia e descriptografia, além da funcionalidade de copiar texto para a área de transferência.
- **Trello**: Ferramenta de gerenciamento de projetos usada para organizar o desenvolvimento de forma ágil.

## Estrutura do Projeto

- `index.html`: Arquivo HTML que contém a estrutura da página.
- `styles.css`: Arquivo CSS que contém os estilos da página.
- `script.js`: Arquivo JavaScript que contém a lógica de criptografia, descriptografia e a funcionalidade de copiar texto.

## Como Executar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Navegue até a pasta do projeto**:
    ```bash
    cd nome-do-repositorio
    ```

3. **Abra o arquivo `index.html` no seu navegador**:
    - Você pode abrir o arquivo diretamente no navegador ou usar uma extensão como o Live Server no VS Code para uma atualização automática.

## Explicação do Código

### HTML

O arquivo `index.html` contém a estrutura da página web, incluindo os campos de entrada para o texto, botões para criptografar/descriptografar, e a área para exibir o resultado.

### CSS

O arquivo `styles.css` adiciona estilos básicos para tornar a página mais apresentável.

### JavaScript

O arquivo `script.js` contém três funções principais:

- **`encryptText()`**: Criptografa o texto de entrada substituindo as letras conforme as regras de criptografia.
- **`decryptText()`**: Descriptografa o texto de entrada revertendo as substituições feitas pela criptografia.
- **`copyToClipboard()`**: Copia o texto resultante para a área de transferência.

## Conclusão

Este projeto foi desenvolvido para praticar a manipulação de strings e a criação de uma interface web interativa usando HTML, CSS e JavaScript. Ele serve como uma introdução ao desenvolvimento web e à aplicação de conceitos básicos de criptografia. Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades!

