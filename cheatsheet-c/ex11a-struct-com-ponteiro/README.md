# Exercício 11a — Struct com ponteiro

## Descrição

Uso de `struct`, acesso a campos por ponteiro com `->` e cópia de structs.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
p: (3,4)
apos ptr->x=10: p.x=10
dist2(origem,p)=116
p.x=10  q.x=99
```

## Observações

- `ptr->x = 10` altera o campo `x` de `p` por meio do ponteiro.
- `dist2` recebe os pontos por ponteiro e retorna 116.
- `Ponto q = p` cria uma cópia completa; alterar `q.x` não modifica `p.x`.

## Conclusão

Structs podem ser copiadas com `=`, ao contrário de vetores. O operador `->` é equivalente a `(*ptr).campo`.
