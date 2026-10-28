# Exercício 17 — qsort e ponteiro para função

## Descrição

Passagem de uma função como argumento para outra, com o `qsort` recebendo a função de comparação.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
Crescente:  10 20 30 40 50 
Decrescente:50 40 30 20 10 
Crescente:  10 20 30 40 50 
```

## Observações

- Com `cmp_int_asc`, o vetor é ordenado de forma crescente; com `cmp_int_desc`, de forma decrescente.
- A chamada ao `qsort` é a mesma; apenas a função de comparação muda.
- `ops` é um vetor de ponteiros para função, e `ops[0]` corresponde a `cmp_int_asc`.

## Conclusão

Ponteiros para função permitem que o comportamento de uma rotina genérica, como a ordenação, seja definido por quem a chama.
