# Exercício 12 — Enum com switch e flags

## Descrição

Uso de `enum` para nomear valores inteiros, em um `switch` e como conjunto de permissões.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
0 = Domingo
1 = Segunda
2 = Terca
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado

Permissões: leitura=sim escrita=não execução=sim
```

## Observações

- `DOM` vale 0, `SEG` vale 1, e assim sucessivamente.
- As permissões valem 1, 2 e 4. `LEITURA | EXECUCAO` resulta em 5.
- Como o bit de escrita não está ligado, a permissão de escrita é exibida como "não".

## Conclusão

O `enum` torna o código mais legível ao substituir números por nomes. O uso de potências de 2 permite combinar e testar permissões com operações bit a bit.
