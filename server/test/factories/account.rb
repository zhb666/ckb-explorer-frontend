FactoryBot.define do
  factory :account do
    address_hash { "0x#{SecureRandom.hex(32)}" }
    balance { 0 }
    cell_consumed { 0 }
    ckb_transactions_count { 0 }

    trait :with_transactions do
      ckb_transactions_count { 3 }
      after(:create) do |account|
        block = create(:block, :with_block_hash)
        ckb_transactions = create_list(:ckb_transaction, 3, block: block)
        account.ckb_transactions << ckb_transactions
      end
    end
  end
end
