# Exercício 5c — do-while

## Descrição

O laço `do-while`, que executa o bloco antes de testar a condição.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
n = 1
n = 2
n = 4
n = 8
n = 16
```

## Observações

- `n` é dobrado a cada iteração: 1, 2, 4, 8, 16.
- Quando `n` chega a 32, a condição `n < 32` é falsa e o laço termina.

## Conclusão

O `do-while` garante ao menos uma execução do bloco, mesmo que a condição seja falsa desde o início. Não há estrutura equivalente em Python.
