# Exercício 1 — Pilha de chamadas

## Descrição

Demonstra como uma função chama outra e como cada chamada ocupa um espaço próprio na pilha de chamadas (*stack*).

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
16
```

## Observações

- Quando `main` chama `soma_mult`, um novo bloco é criado na pilha com os parâmetros `a=1`, `b=5` e `c=3`.
- A chamada `mult(5, 3)` cria um terceiro bloco acima dos anteriores.
- `mult` retorna 15 e seu bloco é removido. Em seguida, `soma_mult` retorna 1 + 15 = 16 e também é removido.
- Ao final, permanece apenas o bloco de `main`, com `resultado = 16`.

## Conclusão

As variáveis locais de uma função existem apenas enquanto ela está em execução. Quando a função retorna, seu bloco é removido da pilha junto com essas variáveis.
