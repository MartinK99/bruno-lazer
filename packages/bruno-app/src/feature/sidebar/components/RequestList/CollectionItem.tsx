/**
 * This file is part of bruno-app.
 * For license information, see the file LICENSE_GPL3 at the root directory of this distribution.
 */
import { IconChevronDown } from '@tabler/icons-react';
import { RequestItemWrapper } from './RequestItemWrapper';
import classes from './Item.module.scss';

type CollectionItemProps = {
  type: 'collection';
  name: string;
  uid: string;
  collapsed: boolean;
};

export const CollectionItem: React.FC<CollectionItemProps> = ({ collapsed, name, type, uid }) => {
  return (
    <RequestItemWrapper collectionUid={uid} type={type} indent={0} className={classes.wrapper}>
      <IconChevronDown className={classes.icon} data-collapsed={collapsed} />
      <div className={classes.text}>{name}</div>
    </RequestItemWrapper>
  );
};
