import React, { ChangeEvent, useState } from "react";
import { ReactNode } from "react";
import clsx from "clsx";

interface CmsWidgetControlProps {
  value: string;
  forId: string;
  classNameWrapper: string;
  classNameWidgetActive: string;
  classNameLabel: string;
  classNameLabelActive: string;
  onChange: (uniqueFieldValue: string) => void;
}

export const UniqueString = ({
  value,
  forId,
  classNameWrapper,
  classNameWidgetActive,
  classNameLabel,
  classNameLabelActive,
  onChange,
}: CmsWidgetControlProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [links, setLinks] = useState<string[]>([]);

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const isValid = () => {
    let message = "";
    if (links.find((link) => value === link)) {
      message = "The url is already used by another post";
    }
    return message.length > 0 ? { error: { message } } : true;
  };

  const onFocusInput = () => setIsFocused(true);

  const onBlurInput = () => setIsFocused(true);

  return (
    <input
      id={forId}
      type="text"
      value={value}
      className={clsx(classNameWrapper, isFocused && classNameWidgetActive)}
      onChange={onChangeField}
      onFocus={onFocusInput}
      onBlur={onBlurInput}
    />
  );
};
