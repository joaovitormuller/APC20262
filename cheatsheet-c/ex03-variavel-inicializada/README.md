# Exercício 3 — Variável não inicializada vs. inicializada

## Descrição

Mostra a diferença entre declarar e inicializar uma variável, além do uso de `const`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
a = 42
b = 50
global = 0
N = 100
```

## Observações

- Após `int b;`, a variável `b` contém um valor indefinido (lixo de memória).
- Após `b = a + 8;`, `b` passa a valer 50.
- A variável global `global` começa com 0 sem atribuição explícita.
- Com a linha `N = 200;` descomentada, o programa não compila, pois `N` é constante.

## Conclusão

Somente variáveis globais e `static` são inicializadas automaticamente com zero. Variáveis locais precisam receber um valor antes de serem usadas.
