import React, { FC } from "react";

import { useTodo } from "hooks";
import { Icon } from "components";
import { ITodo } from "./types";
import * as S from "./styles";

const Todo: FC<ITodo> = ({ id, text, isChecked }) => {
  const { toggleChecked, setText, removeTodo } = useTodo();

  return (
    <S.Todo>
      <S.CheckBox onClick={() => toggleChecked(id)} checked={isChecked}>
        {isChecked && <Icon name="check" />}
      </S.CheckBox>
      <S.TodoText
        suppressContentEditableWarning
        spellCheck={false}
        onBlur={(event: React.FocusEvent) =>
          setText(id, event.target.textContent!)
        }
        checked={isChecked}
        contentEditable={!isChecked}
      >
        {text}
      </S.TodoText>
      <S.CloseButton onClick={() => removeTodo(id)}>
        <Icon name="close" />
      </S.CloseButton>
    </S.Todo>
  );
};

export default Todo;
