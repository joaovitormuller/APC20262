# Exercício 5a — if / else if / else

## Descrição

Uma estrutura `if / else if / else` que classifica uma nota.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
C
```

## Observações

- Com `nota = 72`, as condições `>= 90` e `>= 80` são falsas e seus blocos são ignorados.
- A condição `>= 70` é verdadeira, o programa imprime `C` e o `else` final é ignorado.

## Conclusão

Apenas um dos blocos é executado. A estrutura é equivalente ao `if / elif / else` do Python, com parênteses obrigatórios na condição e `else if` no lugar de `elif`.
