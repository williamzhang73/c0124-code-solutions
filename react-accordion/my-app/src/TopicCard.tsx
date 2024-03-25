type Topic = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  topic: Topic;
  activeId: number;
  onTitleClick: (id: number) => void;
};
export function TopicCard({ topic, activeId, onTitleClick }: Props) {
  return (
    <>
      <div className="title" onClick={() => onTitleClick(topic.id)}>
        {topic.title}
      </div>
      {activeId === topic.id ? (
        <div className="content">{topic.content}</div>
      ) : (
        ''
      )}
    </>
  );
}
