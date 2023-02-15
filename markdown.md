# 제목(Header)

제목은 `<h1> ~ <h6>`로 표현 가능하며, `#`의 개수로 단계를 나타낼 수 있습니다.

_code_

```
# Title1
## Title2
### Title3
#### Title4
##### Title5
###### Title6
```

_preview_

![title](markdownimg/title.PNG)

# BlockQuote(인용구)

`>` 을 사용하는 것이다.

_code_

```
>First blockquote
>   >Second blockquote
>   >   >Third blockquote
```

_preview_

> First blockquote
>
> > Second blockquote
> >
> > > Third blockquote

# 목록

## 순서있는 목록

_code_

```
1. First
2. Second
3. Third
```

_preview_

1. First
2. Second
3. Third

숫자와 상관없이 순서는 자동적으로 **내림차순**으로 정리된다.

## 순서없는 목록

_code_

```
* C
    * Javascript
        * python
+ C
    + Javascript
        + python
- C
    - Javascript
        - python
```

_preview_

- C
  - Javascript
    - python

* C
  - Javascript
    - python

- C
  - Javascript
    - python

들여쓰기는 tap 으로 한다.

- C
  - Javascript
    - python
      - React

# 코드 블록(Code block)

프로그래밍 문법에 맞게 코드를 강조하는 하이라이팅 기능을 지원합니다.

` ``` `을 쓰고 그 뒤에 원하는 언어를 명시하고 코드를 작성합니다.

`<pre><code>{code}</code></pre>`를 사용해도 가능하다.

_code_

![codeblock](markdownimg/codeblock.PNG)

_preview_

```python
print("hello world")
```

4개의 공백이나 탭으로 들여쓰기하면 코드블록이 생성되며, 들여쓰지 않은 행을 만나면 끝난다.

_preview_

This is a normal paragraph:

    This is a code block.

end code block

이 때 코드블럭이 시작되는 코드는 이전의 줄과 한 줄 띄어야 한다.

# 수평선

페이지 나누기 용도로 사용한다.

_code_

<pre>
* * *
***
*****
- - -
--------------------
</pre>

-preview-

---

---

---

---

---

# 하이퍼링크

[Title](주소)

_code_

<pre>
[GitHub](https://github.com/saladlemon)
</pre>

_preview_

[GitHub](https://github.com/saladlemon)

---

자동연결

_code_

```
GitHub link: <https://github.com/saladlemon>
```

_preview_

GitHub link: <https://github.com/saladlemon>
