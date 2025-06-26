/**
 * Example component showing how to use environment variables
 */
'use client';

export default function EnvExample() {
  return (
    <div className='p-4 border rounded-lg'>
      <h3 className='text-lg font-semibold mb-2'>
        Environment Variables Example
      </h3>
      <div className='space-y-2'>
        <p>
          <strong>Server URL:</strong> {process.env.SERVER_URL}
        </p>
        <p>
          <strong>Environment:</strong> {process.env.NODE_ENV}
        </p>
        <div className='text-sm text-gray-600 mt-4'>
          <p>Environment files loaded based on NODE_ENV:</p>
          <ul className='list-disc list-inside mt-1'>
            <li>
              Always: <code>.env</code>
            </li>
            <li>
              Development: <code>.env.development</code>
            </li>
            <li>
              Staging: <code>.env.staging</code>
            </li>
            <li>
              Production: <code>.env.production</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
