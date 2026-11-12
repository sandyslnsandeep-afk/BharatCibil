import {
  AlertCircle,
  Ban,
  Building2,
  CalendarX,
  Copy,
  FileCheck2,
  FileWarning,
  FileX,
  Gavel,
  IndianRupee,
  Scale,
  TrendingDown,
} from 'lucide-react';
import { CreditProblem } from '../types';

export function ProblemIcon({ name }: { name: CreditProblem['iconName'] }) {
  const props = { className: 'h-5 w-5 text-[#087F5B]', 'aria-hidden': true as const };

  switch (name) {
    case 'TrendingDown':
      return <TrendingDown {...props} />;
    case 'Ban':
      return <Ban {...props} />;
    case 'FileX':
      return <FileX {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'AlertCircle':
      return <AlertCircle {...props} />;
    case 'FileWarning':
      return <FileWarning {...props} />;
    case 'Copy':
      return <Copy {...props} />;
    case 'IndianRupee':
      return <IndianRupee {...props} />;
    case 'CalendarX':
      return <CalendarX {...props} />;
    case 'FileCheck2':
      return <FileCheck2 {...props} />;
    case 'Gavel':
      return <Gavel {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
  }
}
