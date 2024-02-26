
interface Props {
    cont: string ;
  }

export default function ContenidoBlog({cont}:Props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: cont }} />
  );
}


