import parse from 'html-react-parser';
import { ReactElement, useEffect, useState } from 'react';

const RenderHtml = ({ htmlContent }: { htmlContent: string }) => {
  const [parsedContent, setParsedContent] = useState<string | ReactElement | ReactElement[] | null>(null);

  useEffect(() => {
    const parsed = parse(htmlContent);
    setParsedContent(parsed);
  }, [htmlContent]);

  if (!parsedContent) {
    return null; // Render nothing or a loading indicator while waiting for parsing
  }

  return <p style={{ fontWeight: 300, textAlign: 'justify', padding: '20px 20px' }}>{parsedContent}</p>;
};

export default RenderHtml;
