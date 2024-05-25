// components/CustomConnectWalletButton.tsx

import React, { useMemo } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { isMobile } from '@/lib/utils';

const CustomConnectWalletButton: React.FC = () => {
    const isMobileDevice = useMemo(() => isMobile(), []);

    if (isMobileDevice) {
        return (
            <a
                href={`https://phantom.app/ul/browse/${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    padding: '15px 32px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                }}
            >
                Connect Wallet
            </a>
        );
    }

    return <WalletMultiButton />;
};

export default CustomConnectWalletButton;
