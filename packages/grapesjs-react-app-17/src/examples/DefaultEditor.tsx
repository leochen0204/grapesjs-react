import GrapesJsEditor, { EditorProps } from '@leochen0204/grapesjs-react';
import { defaultEditorProps } from './common';

export default function DefaultEditor(props: Partial<EditorProps>) {
  return <GrapesJsEditor className="gjs-default-editor" {...defaultEditorProps} {...props} />;
}
