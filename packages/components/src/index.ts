import { ChromeAPI } from '@redhat-cloud-services/types';

declare global {
  interface Window {
    insights: { chrome: ChromeAPI };
  }
}

export * from './LongTextTooltip';
export * from './Section';
export * from './Ansible';
export * from './Main';
export * from './Pagination';
export * from './SimpleTableFilter';
export * from './Input';
export * from './InsightsLabel';
export * from './Battery';
export * from './Breadcrumbs';
export * from './Shield';
export * from './TabLayout';
export * from './Dark';
export * from './PageHeader';
export * from './Truncate';
export * from './Wizard';
export * from './DownloadButton';
export * from './Reboot';
export * from './Skeleton';
export * from './SkeletonTable';
export * from './TableToolbar';
export * from './EmptyTable';
export * from './Spinner';
export * from './Filters';
export * from './InvalidObject';
export * from './NotAuthorized';
export * from './FilterChips';
export * from './BulkSelect';
export * from './ConditionalFilter';
export * from './TagCount';
export * from './TagModal';
export * from './PrimaryToolbar';
export * from './DateFormat';
export * from './CullingInfo';
export * from './Unavailable';
export * from './ErrorState';
export * from './Maintenance';
export * from './FilterHooks';
export * from './AsyncComponent';
