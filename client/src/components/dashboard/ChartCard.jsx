import { Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

const TransactionTable = ({ 
  transactions = [], 
  onEdit, 
  onDelete,
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No transactions found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
            <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
            <th className="text-right py-3 px-4 text-gray-400 font-medium">Type</th>
            {(onEdit || onDelete) && (
              <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="py-3 px-4 text-gray-400">
                {format(new Date(transaction.date), 'MMM dd, yyyy')}
              </td>
              <td className="py-3 px-4">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  {transaction.notes && (
                    <p className="text-sm text-gray-400">{transaction.notes}</p>
                  )}
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="text-primary text-sm">{transaction.category}</span>
              </td>
              <td className={`py-3 px-4 text-right font-semibold ${
                transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${parseFloat(transaction.amount).toFixed(2)}
              </td>
              <td className="py-3 px-4 text-right">
                <span className={`px-2 py-1 rounded text-xs ${
                  transaction.type === 'income'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-red-500/20 text-red-500'
                }`}>
                  {transaction.type}
                </span>
              </td>
              {(onEdit || onDelete) && (
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(transaction)}
                        className="p-2 hover:bg-white/10 rounded transition text-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(transaction.id)}
                        className="p-2 hover:bg-white/10 rounded transition text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;