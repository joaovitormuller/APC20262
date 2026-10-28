# Exercício 16 — Estouro de buffer detectado com segurança

## Descrição

Cópia de texto sem ultrapassar o tamanho do vetor de destino, com `strncpy` e `snprintf`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
destino = 'Brasili'
strlen  = 7
buf = 'valor=12345'
```

## Observações

- `destino` tem 8 posições: 7 caracteres e o `'\0'`.
- O resultado é `Brasili`; o restante do texto é descartado.
- O `'\0'` é inserido manualmente, pois `strncpy` não o garante quando o texto é cortado.
- `snprintf` gera `valor=12345` respeitando o tamanho do buffer.

## Conclusão

Funções como `strcpy` e `sprintf` não verificam o tamanho do destino. As versões `strncpy` e `snprintf` limitam a quantidade de caracteres escritos.
