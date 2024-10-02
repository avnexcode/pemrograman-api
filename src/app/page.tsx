"use client"
import React from "react";
import HomeLink from "@/components/elements/HomeLink";
import TitlePage from "@/components/elements/TitlePage";
import ContainerBase from "@/components/layouts/ContainerBase";

export default function Home() {
  return (
    <ContainerBase className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TitlePage title="Home Page" link={false}/>

      <div className="space-y-4">
        <div className="flex flex-col gap-5 items-center justify-center">
          <HomeLink href="album" />
          <HomeLink href="post" />
        </div>
      </div>
    </ContainerBase>
  );
}
