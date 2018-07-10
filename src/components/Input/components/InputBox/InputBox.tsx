import { css } from "emotion";
import * as React from "react";

import { Typeahead } from "../Typeahead";
import {
  ButtonContainer,
  Input,
  InputContainer,
  InputInnerContainer,
  inputResetStyles,
  SearchButton,
  SearchContainer,
  SearchIcon
} from "./styled";
import { VoiceInputButton } from "./VoiceInputButton";

const RETURN_KEYCODE = 13;

export type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type InputFocusEvent = React.FocusEvent<HTMLInputElement>;
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>;

export interface InputBoxProps {
  value: string;
  placeholder?: string;
  isDropdownOpen?: boolean;
  mode?: "standard" | "typeahead" | "suggestions";
  suggestions?: string[];
  autoFocus?: boolean;

  styles?: {
    container?: React.CSSProperties;
    input?: React.CSSProperties;
    typeahead?: React.CSSProperties;
    button?: React.CSSProperties;
  };

  inputRef?: (element: HTMLInputElement) => void;
  inputContainerRef?: (element: HTMLFormElement) => void;
  onFocus?: (event: InputFocusEvent) => void;
  onBlur?: (event: InputFocusEvent) => void;
  onChange?: (event: InputChangeEvent) => void;
  onKeyDown?: (event: InputKeyboardEvent) => void;

  onSearchButtonClick?: (event: ButtonMouseEvent) => void;

  enableVoiceInput?: boolean;
  onVoiceInput?: (result: string) => void;
}

export interface InputBoxState {
  focused: boolean;
}

export class InputBox extends React.Component<InputBoxProps, InputBoxState> {
  public static defaultProps = {
    autoFocus: false,
    enableVoiceInput: false,
    mode: "standard",
    suggestions: []
  };

  public state = { focused: false };
  private input?: HTMLInputElement;
  private inputContainer?: HTMLFormElement;

  public componentDidMount() {
    if (!this.state.focused) {
      if (this.props.autoFocus && this.input != null) {
        this.input.focus();
      }
    }
  }

  public render() {
    const {
      value,
      placeholder,
      isDropdownOpen,
      suggestions,
      mode,
      onChange,
      onVoiceInput,
      enableVoiceInput,
      styles = {}
    } = this.props;
    const { focused } = this.state;

    return (
      <InputContainer
        innerRef={this.inputContainerRef}
        isDropdownOpen={isDropdownOpen === undefined ? false : isDropdownOpen}
        isFocused={focused}
        onClick={this.positionCaret}
        styles={styles.container}
      >
        <SearchContainer role="search">
          <InputInnerContainer styles={styles.input}>
            <Input
              className={css(inputResetStyles.container)}
              inputStyle={inputResetStyles.input}
              inputRef={this.inputRef}
              value={value}
              minWidth={5}
              aria-label="Search Input"
              role="combobox"
              aria-autocomplete={mode === "suggestions" ? "both" : undefined}
              aria-haspopup={mode === "suggestions" ? "true" : undefined}
              aria-expanded={
                isDropdownOpen !== undefined && mode === "suggestions"
                  ? (suggestions || []).length > 0
                    ? isDropdownOpen
                    : false
                  : undefined
              }
              placeholder={!focused ? placeholder : undefined}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onKeyDown={this.handleInputOnKeyDown}
              onChange={onChange}
              onFocus={this.handleInputOnFocus}
              onBlur={this.handleInputOnBlur}
            />
            {isDropdownOpen &&
            (mode === "typeahead" || mode === "suggestions") ? (
              <Typeahead mode={mode} styles={styles.typeahead} />
            ) : null}
          </InputInnerContainer>
          <ButtonContainer>
            {enableVoiceInput && (
              <VoiceInputButton
                onVoiceInput={onVoiceInput}
                styles={styles.button}
              />
            )}
            <SearchButton
              onClick={this.handleSearchButtonOnClick}
              aria-label="Do search"
              value="Search"
              styles={styles.button}
            >
              <SearchIcon />
            </SearchButton>
          </ButtonContainer>
        </SearchContainer>
      </InputContainer>
    );
  }

  private handleSearchButtonOnClick = (event: ButtonMouseEvent) => {
    const { onSearchButtonClick } = this.props;
    event.preventDefault();
    if (typeof onSearchButtonClick === "function") {
      onSearchButtonClick(event);
    } else if (onSearchButtonClick !== undefined) {
      throw new Error(
        `Expected \`onSearchButtonClick\` listener to be a function, instead got a value of \`${typeof onSearchButtonClick}\` type`
      );
    }
  };

  private handleInputOnFocus = (event: InputFocusEvent) => {
    const { onFocus } = this.props;
    this.setState(state => ({ ...state, focused: true }));

    if (typeof onFocus === "function") {
      onFocus(event);
    } else if (onFocus !== undefined) {
      throw new Error(
        `Expected \`onFocus\` listener to be a function, instead got a value of \`${typeof onFocus}\` type`
      );
    }
  };

  private handleInputOnBlur = (event: InputFocusEvent) => {
    const { onBlur } = this.props;
    this.setState(state => ({ ...state, focused: false }));

    if (typeof onBlur === "function") {
      onBlur(event);
    } else if (onBlur !== undefined) {
      throw new Error(
        `Expected \`onBlur\` listener to be a function, instead got a value of \`${typeof onBlur}\` type`
      );
    }
  };

  private handleInputOnKeyDown = (event: InputKeyboardEvent) => {
    const { onKeyDown } = this.props;
    const { keyCode } = event;
    if (keyCode === RETURN_KEYCODE) {
      event.preventDefault();
    }

    if (typeof onKeyDown === "function") {
      onKeyDown(event);
    } else if (onKeyDown !== undefined) {
      throw new Error(
        `Expected \`onKeyDown\` listener to be a function, instead got a value of \`${typeof onKeyDown}\` type`
      );
    }
  };

  private inputContainerRef = (element: HTMLFormElement) => {
    this.inputContainer = element;
    if (typeof this.props.inputContainerRef === "function") {
      this.props.inputContainerRef(element);
    }
  };
  private inputRef = (element: HTMLInputElement) => {
    this.input = element;
    if (typeof this.props.inputRef === "function") {
      this.props.inputRef(element);
    }
  };
  private positionCaret = (event: React.MouseEvent<HTMLElement>) => {
    if (this.input === undefined) {
      return;
    }
    // @ts-ignore: tagName is a member of event.target
    if (event.target.tagName !== "DIV") {
      // only focus the input if pressing on the div
      return;
    }

    this.input.focus();
  };
}