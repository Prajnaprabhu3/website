import styled from 'styled-components';
import { media } from 'utils/media';

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  // ol,
  // ul {
  //   list-style: none;
  //   padding: 0rem;

  //   li {
  //     padding-left: 2rem;
  //     position: relative;

  //     & > * {
  //       display: inline-block;
  //       vertical-align: top;
  //     }

  //     &::before {
  //       position: absolute;
  //       content: 'L';
  //       left: 0;
  //       top: 0;
  //       text-align: center;
  //       color: rgb(var(--primary));
  //       font-family: arial;
  //       transform: scaleX(-1) rotate(-35deg);
  //     }
  //   }
  // }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(var(--textSecondary));
  }

  th,
  td {
    border: 1px solid rgb(var(--textSecondary));
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: rgb(var(--textSecondary));
  }

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }

  /* Add margin */

  h1 {
    margin: 2em 0 0em 0;
  }

  h2 {
    margin: 1.75em 0 0em 0;
  }

  h3 {
    margin: 1.5em 0 0em 0;
  }

  h4 {
    margin: 1.25em 0 0em 0;
  }


  body,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0.75em 0;
  }

`;
export default RichText;
