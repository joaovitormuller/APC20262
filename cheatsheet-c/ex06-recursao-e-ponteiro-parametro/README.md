# Exercício 6 — Pilha de chamadas e ponteiro como parâmetro

## Descrição

Recursão, passagem de ponteiro como parâmetro e ponteiro para função.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
5! = 120
dobro de 7 = 14
fn(4) = 24
```

## Observações

- `fatorial(5)` chama `fatorial(4)`, e assim por diante até `fatorial(1)`. Cinco blocos ficam empilhados ao mesmo tempo.
- Os blocos são resolvidos do topo para a base: 1, 2, 6, 24, 120.
- `dobra(&v)` recebe o endereço de `v` e altera o valor original para 14.
- `fn` armazena a função `fatorial`, e `fn(4)` retorna 24.

## Conclusão

Cada chamada recursiva possui suas próprias variáveis na pilha. Passar o endereço de uma variável permite que a função altere o valor original, o mesmo motivo pelo qual o `scanf` exige o `&`.
