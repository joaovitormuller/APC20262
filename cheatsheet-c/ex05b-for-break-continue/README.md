# Exercício 5b — for com break e continue

## Descrição

Um laço `for` que utiliza `continue` para pular iterações e `break` para encerrar o laço.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
1
3
5
```

## Observações

- Quando `i` é par, o `continue` pula o restante da iteração.
- São impressos apenas 1, 3 e 5.
- Quando `i` vale 7, o `break` encerra o laço antes do `printf`.

## Conclusão

A ordem das instruções dentro do laço determina o resultado: como o teste do `break` ocorre antes do `printf`, o valor 7 não é impresso.
