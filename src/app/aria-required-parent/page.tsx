//http://localhost:3001/aria-required-parent
export default function Page() {
  return (
    (<body
      component-id="61a4b399-d4eb-4814-8bad-5361fe73aa1e"
      testparty-id={crypto.randomUUID()}>
      <div
        component-id="cedc1c73-0f89-4405-a2b1-80e349414759"
        testparty-id={crypto.randomUUID()}>
        <div
          component-id="82519133-bd2e-4170-b340-c5c1fd4ea12c"
          testparty-id={crypto.randomUUID()}>
          <div
            role="cell"
            component-id="fb31ee03-50d3-43a5-9924-93b686efccbc"
            testparty-id={crypto.randomUUID()}>This Cell needs row and row's parent options</div>
        </div>
      </div>
      <div
        component-id="b046788e-7678-4464-bf1b-2080a391b0f7"
        testparty-id={crypto.randomUUID()}>
        <div
          role="row"
          component-id="715e7451-468c-4998-9538-12e5c961b6b3"
          testparty-id={crypto.randomUUID()}>
          <div
            role="cell"
            component-id="4deffd1d-2c70-4b47-9ce1-88e677c5a145"
            testparty-id={crypto.randomUUID()}>This Cell has row, needs row's parent options</div>
        </div>
      </div>
      <div
        component-id="41142ca4-92a4-40a7-99a8-9687f50302bb"
        testparty-id={crypto.randomUUID()}>
        <div
          role="rowgroup"
          component-id="08edbb3b-218a-46e8-9100-9e9fcff6d922"
          testparty-id={crypto.randomUUID()}>
          <div
            component-id="e9c10eb4-7e94-481d-afc2-527ac9f2e594"
            testparty-id={crypto.randomUUID()}>
            <div
              role="cell"
              component-id="40cf8abf-5773-47c0-92de-a06a4aa9f260"
              testparty-id={crypto.randomUUID()}>This Cell has rowgroup, needs row in between and rowgroup's parent options</div>
          </div>
        </div>
      </div>
      <div
        component-id="ddc59f8d-7226-414d-96da-112e73e4ed76"
        testparty-id={crypto.randomUUID()}>
        <div
          component-id="7cd11b67-826e-4d5f-b3e4-7f4703ea3234"
          testparty-id={crypto.randomUUID()}>
          <div
            role="cell"
            component-id="6242ea13-e9e2-44e7-9526-b0f3eecba565"
            testparty-id={crypto.randomUUID()}>This is Cell 1, it needs row and row's parent options</div>
        </div>
        <div
          component-id="aa952e24-6f89-4be8-a0b7-ab98efe35ca9"
          testparty-id={crypto.randomUUID()}>
          <div
            component-id="5c76c79c-5f7b-45c9-9a25-26762fc24ca1"
            testparty-id={crypto.randomUUID()}>This is supposed to be cell under row.  It should be remediated as part of Cell 1's remediation</div>
        </div>
      </div>
      <div
        component-id="1b09ef2a-1953-4850-8311-e06651d3c771"
        testparty-id={crypto.randomUUID()}>
        <div
          role="caption"
          component-id="87e4663b-7c71-4b71-8f9f-6ee34b4693a2"
          testparty-id={crypto.randomUUID()}>caption needs parent options</div>
      </div>
      <div
        component-id="60c1890e-4628-43d1-ada7-5cf4f918beb1"
        testparty-id={crypto.randomUUID()}>
        <div
          role="treeitem"
          component-id="842975fc-57e2-42f0-be64-2e07b02fc1f1"
          testparty-id={crypto.randomUUID()}>treeitem needs parent options</div>
        <div
          component-id="fcfcdd50-607b-4d72-853d-607cff6aa276"
          testparty-id={crypto.randomUUID()}>Should be treeitem</div>
      </div>
      <div
        component-id="2569e4a7-1e63-4c57-bee5-e7070e2d85ee"
        testparty-id={crypto.randomUUID()}>
        <div
          role="option"
          component-id="ccfd5f69-ddec-4b29-b4f5-7dcb56eec844"
          testparty-id={crypto.randomUUID()}>option needs parent options</div>
        <div
          component-id="08351a24-73c2-4c11-8daf-c80efcb5f8a7"
          testparty-id={crypto.randomUUID()}>Should be Option</div>
      </div>
      <div
        component-id="494872b1-1960-4c41-9d24-65054d5ff57d"
        testparty-id={crypto.randomUUID()}>
        <div
          role="menuitem"
          component-id="16b78ae8-c1b6-4bd5-8d3c-b41a3739c472"
          testparty-id={crypto.randomUUID()}>menuitem needs parent options</div>
        <div
          component-id="eb376b35-fb62-4dff-bd2e-3daa92128ff8"
          testparty-id={crypto.randomUUID()}>Should be menuitem</div>
        <div
          component-id="5b972753-7450-445a-9f04-49b717b7756b"
          testparty-id={crypto.randomUUID()}>Should be menuitem</div>
      </div>
      <div
        component-id="cd30ecdd-f497-40b3-a6c8-f245151e0ada"
        testparty-id={crypto.randomUUID()}>
        <div
          role="listitem"
          component-id="26fb3459-5ca5-4f54-9a3f-3fd7f9c903b6"
          testparty-id={crypto.randomUUID()}>listitem needs parent list</div>
        <div
          component-id="e6c814a9-4840-4692-b724-22d269505896"
          testparty-id={crypto.randomUUID()}>Should be listitem</div>
        <div
          component-id="70a9f83e-8cfd-4f5d-bfaf-3170076e21b8"
          testparty-id={crypto.randomUUID()}>Should be listitem</div>
      </div>
      <div
        component-id="3332f079-6d29-4852-b433-3e34972ff7ba"
        testparty-id={crypto.randomUUID()}>
        <div
          role="tab"
          component-id="b6dba816-22d1-4097-88cf-08e56ff6bc31"
          testparty-id={crypto.randomUUID()}>tab needs parent tablist</div>
        <div
          component-id="79cc31bb-7ad5-422d-bcbf-c4472c2b5877"
          testparty-id={crypto.randomUUID()}>Should be tab</div>
        <div
          component-id="ce93f282-042a-4cad-b36f-836b8f8a2a4f"
          testparty-id={crypto.randomUUID()}>Should be tab</div>
      </div>
    </body>)
  );
}