# Exercício 10 — Heap vs. Stack e realloc

## Descrição

Alocação de memória no heap com `calloc`, redimensionamento com `realloc` e liberação com `free`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
v[0]=10
v[1]=20
v[2]=30
v[3]=40
v[0]=10
v[1]=20
v[2]=30
v[3]=40
v[4]=50
v[5]=60
```

## Observações

- `calloc` aloca 4 inteiros, todos inicializados com 0.
- O laço atribui os valores 10, 20, 30 e 40.
- `realloc` aumenta o bloco para 6 inteiros, preservando os valores existentes. As novas posições recebem 50 e 60.
- O retorno do `realloc` é armazenado em `tmp` para não perder o endereço original em caso de falha.
- `free` libera a memória e `v = NULL` evita o uso posterior do endereço liberado.

## Conclusão

A memória do heap é gerenciada manualmente e permanece alocada até a chamada de `free`, diferentemente das variáveis da pilha, que são removidas automaticamente.
