import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Topic = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  topics: Topic[];
};
export function Accordion({ topics }: Props) {
  const [activeId, setActiveId] = useState(0);
  return topics.map((topic) => (
    <TopicCard
      topic={topic}
      key={String(topic.id)}
      activeId={activeId}
      onTitleClick={setActiveId}></TopicCard>
  ));
}
