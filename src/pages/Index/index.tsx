import React from 'react';
import { formatMessage, setLocale } from 'umi-plugin-locale';
import { DndProvider } from 'react-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Backend from 'react-dnd-html5-backend';
import { CtxProvider } from '../../components/context';
import Headers from '@/layouts/Headers';
import Content from '@/layouts/Content';
import SideBar from '@/layouts/SideBar';

function Index() {
  function onDragEnd() {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DndProvider backend={Backend}>
        <Headers />
        <section className="container">
          <section className="dragContainer">
            <Content />
          </section>
          <SideBar />
        </section>
      </DndProvider>
    </DragDropContext>
  );
}
export default () => (
  <CtxProvider>
    <Index />
  </CtxProvider>
);
