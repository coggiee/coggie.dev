import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

interface BreadcrumbProps {
  pathname: string;
  title: string;
}

export default function Breadcrumb({ pathname, title }: BreadcrumbProps) {
  return (
    <Breadcrumbs size="sm" variant="light" className="grow">
      <BreadcrumbItem href="/">{pathname}</BreadcrumbItem>
      <BreadcrumbItem id="breadcrumb-title">{title}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
