# Exercícios de C

Exercícios de linguagem C desenvolvidos em APC, com execução passo a passo no [PythonTutor](https://pythontutor.com/c.html) para observar variáveis, pilha de chamadas (*stack*) e heap.

Cada pasta contém o código-fonte (`main.c`) e um `README.md` com a descrição do exercício, a saída obtida, as observações da execução e uma conclusão.

## Exercícios

| Nº | Assunto |
|---|---|
| [1](ex01-pilha-de-chamadas/) | Pilha de chamadas |
| [2](ex02-tamanhos-e-promocao/) | Tamanhos e promoção |
| [3](ex03-variavel-inicializada/) | Variável não inicializada vs. inicializada |
| [4](ex04-operadores/) | Divisão inteira, módulo, incremento e bits |
| [5a](ex05a-if-else/) | if / else if / else |
| [5b](ex05b-for-break-continue/) | for com break e continue |
| [5c](ex05c-do-while/) | do-while |
| [5d](ex05d-switch-fall-through/) | switch com fall-through |
| [6](ex06-recursao-e-ponteiro-parametro/) | Pilha de chamadas e ponteiro como parâmetro |
| [7](ex07-arrays-e-matriz/) | Array e matriz |
| [8](ex08-strings/) | Manipulação de strings |
| [9a](ex09a-ponteiro-basico/) | Ponteiro básico e derreferência |
| [9b](ex09b-aritmetica-de-ponteiros/) | Aritmética de ponteiros |
| [9c](ex09c-ponteiro-para-ponteiro/) | Ponteiro para ponteiro |
| [10](ex10-heap-e-realloc/) | Heap vs. Stack e realloc |
| [11a](ex11a-struct-com-ponteiro/) | Struct com ponteiro |
| [11b](ex11b-union/) | Union: membros compartilham memória |
| [12](ex12-enum-e-flags/) | Enum com switch e flags |
| [13](ex13-printf-e-arquivos/) | Formatação e E/S de arquivo |
| [14](ex14-macros-e-preprocessador/) | Macros e compilação condicional |
| [15a](ex15a-escopo-e-shadowing/) | Escopo de bloco e shadowing |
| [15b](ex15b-variavel-static-local/) | Variável `static` local |
| [16](ex16-copia-segura-de-string/) | Estouro de buffer detectado com segurança |
| [17](ex17-qsort-e-callbacks/) | qsort e ponteiro para função |
| [18](ex18-lista-ligada/) | Lista simplesmente ligada |

## Compilação

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

Com detecção de erros de memória:

```bash
gcc -Wall -Wextra -std=c11 -fsanitize=address,undefined -g -o main main.c
```
