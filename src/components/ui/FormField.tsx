"use client";

import { Control, FieldPath, FieldValues, ControllerRenderProps, Controller } from "react-hook-form";
import React from 'react';

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label?: string;
  type?: string;
  required?: boolean;
  control: Control<TFieldValues>;
  render: (field: ControllerRenderProps<TFieldValues, TName>) => React.ReactElement;
}

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  type = "text",
  required,
  control,
  render,
  ...rest
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => React.createElement(() => render(field))}
      rules={{ required }}
    />
  );
};