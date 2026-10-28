# Exercício 18 — Lista simplesmente ligada

## Descrição

Lista ligada construída com struct, ponteiros, `malloc` e laços.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
10 -> 20 -> 30 -> NULL
```

## Observações

- Cada nó é alocado com `malloc` e contém um valor e um ponteiro para o próximo nó.
- `inserir_frente` recebe `No **cabeca` para poder alterar a variável `lista` de `main`.
- Os valores inseridos na ordem 30, 20 e 10 resultam na lista 10 -> 20 -> 30, pois cada novo nó é colocado no início.
- `liberar` armazena o próximo nó antes de chamar `free` no nó atual.

## Conclusão

O exercício reúne os conceitos dos anteriores. No PythonTutor, os nós aparecem no heap ligados por setas, o que evidencia a estrutura da lista.
