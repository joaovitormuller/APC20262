# Exercício 15b — Variável `static` local

## Descrição

Variável `static` dentro de uma função, que preserva o valor entre chamadas.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
chamada 1
chamada 2
chamada 3
```

## Observações

- `static int n = 0` é inicializada apenas uma vez.
- Cada chamada incrementa `n`, produzindo 1, 2 e 3.
- Sem `static`, a saída seria 1, 1, 1.

## Conclusão

Uma variável `static` local tem escopo restrito à função, mas existe durante toda a execução do programa.
