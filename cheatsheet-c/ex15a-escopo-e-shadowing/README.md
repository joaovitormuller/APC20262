# Exercício 15a — Escopo de bloco e shadowing

## Descrição

Uma variável declarada dentro de um bloco `{ }` oculta outra de mesmo nome declarada fora dele.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
x externo = 1
global    = 100
x interno  = 2
global local = 999
x apos bloco = 1
global       = 100
```

## Observações

- Dentro do bloco existem dois `x`: o externo (1) e o interno (2).
- O mesmo ocorre com `global`: a variável local (999) oculta a global (100).
- Ao sair do bloco, as variáveis internas deixam de existir e os valores originais voltam a ser utilizados.

## Conclusão

O nome de uma variável sempre se refere à declaração mais próxima no escopo atual.
