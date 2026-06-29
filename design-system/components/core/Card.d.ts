import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** The base surface container — tight radius, theme-aware elevation. */
export function Card(props: DivProps): JSX.Element;
export function CardHeader(props: DivProps): JSX.Element;
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;
export function CardContent(props: DivProps): JSX.Element;
export function CardFooter(props: DivProps): JSX.Element;
