# Exercício 14 — Macros e compilação condicional

## Descrição

Constantes e macros com `#define` e compilação condicional com `#ifdef`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
Área r=5: 78.54
MAX(7,3) = 7
[main.c:21] iniciando cálculo
Compilado em Oct 28 2026 às 15:54:25
```

A data e a hora variam a cada compilação.

## Observações

- A área para `r = 5` resulta em 78.54.
- `MAX(7, 3)` retorna 7.
- Com `DEBUG` definido, `LOG` imprime o nome do arquivo e o número da linha. Sem a definição, essa linha não é gerada.
- `__DATE__` e `__TIME__` indicam o momento da compilação.

## Conclusão

As macros são substituídas pelo pré-processador antes da compilação. O comando `gcc -E main.c` exibe o código após essas substituições.
