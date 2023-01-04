# ProjectDouble  Desafios - estudos em tempo livre. 

Part 01: Nesse desafio iremos aprender a como estruturar o aplicativo angular. 

Deve seguir a seguinte estrutura: 
* SrC /
 app /
 core /
 authentication /
 directives/
 guards /
 helpers /
 pipes /
 services /
 course-details /
 home /
 shared /
 components /
 mocks /
 models /
 appcomponent.spects /
 appcomponent.ts /
 app.module.ts /
 assets /
 environments /
 

As pastas serão todas vazias, o projeto só estará estruturado. 

Limpe o código e deixe a home do aplicativo para página em branco. 

Instale o angular material. 

Usar última versão instável do angular. 

Part 2: Crie uma nova pasta chamada customers, dentro crie os arquivos do angular com o comando cli, o arquivo deve chamar address.component.  

HTML : 

Criar 3 botões, Inserir, remover e ordenar. 

Criar campo do tipo texto para pesquisar. 

Criar uma grid usando html puro. 

Colunas 

Cep, rua, número, cidade, Estado 

Typescript : 

Criar objeto vetor com tipagem com as colunas acima. 

Criar 6 funções, inserir, remover, ordenar, validar, pesquisar e limpar. 

A função inserir deve inserir 3 endereços quaisquer sendo diferentes validar se cep igual. Ao inserir um cep, seu último número inteiro deve ser aleatório randômico de 1 a 5. 

A função remover deve remover sempre o último elemento do vetor. 

A função ordenar, deve ser guardado sempre o último estado do clique ou seja, deve criar uma variável isAsc sendo por padrão verdadeira, a cada clique no botão ele deve ter seu estado alterado. A função ordenar deve checar essa variável e se isAsc verdadeiro então ordenar de forma crescente o campo rua, se não de forma decrescente o campo rua. 

A função validar deve não permitir a duplicação de cep na inserção. 

A função pesquisar deve receber uma string do campo Pesquisar e filtrar. Antes de filtrar o vetor, deve-se guardar o estado original desse vetor em outra variável. 

A função limpar deve recuperar o estado original do vetor e mover para vetor que está sendo rodado no loop da grid e então o vetor clone deve ser vazio. 

 - Usar métodos de vetores. 
 - Codificação em Inglês. 

Part 3: 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
