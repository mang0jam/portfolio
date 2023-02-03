import React from 'react';
import CodeTyping from '../CodeTyping/CodeTyping';
import styles from './Content.module.css';
const codeString = ` const jay = {
name: 'Jay Court',
languages: ['Javascript', 'Ruby', 'C#', 'Typescript],
web: ['React', 'Ionic', 'Angular', 'RxJS', 'AJAX'],
backend: ['Rails', 'Node'],
databases: ['SQL', 'PostgresSQL']
devops: ['Git', 'Gitlab', 'CircleCI', 'Heroku']
};`


const Content = () => (
 
  
  <div className={styles.Content} style={{height:'100%', backgroundColor: '#ccc'}}>
       <CodeTyping 
          codeString={codeString}
       />
  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
