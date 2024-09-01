"use server";

import React from "react";

import Navbar from "@/component/general/navbar";
import Container from "@/component/general/container-layout";
import Hero from "@/component/home/hero";
import CardListHorizontal from "@/component/general/card-list";

export default async function Home(): Promise<React.ReactNode> {
  return (
    <>
      <Navbar />
      <main className=" mx-auto h-[2000px]">
        <Hero />
        <Container>
          <CardListHorizontal>
            <div>
              <p>hello</p>
            </div>
          </CardListHorizontal>
        </Container>
      </main>
    </>
  );
}
