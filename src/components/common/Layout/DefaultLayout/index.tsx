import BaseLayout from '../BaseLayout';

import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const UserNotLogguedInLayout = ({ children }: Props) => <main className={styles.container}>{children}</main>;

export default UserNotLogguedInLayout;
