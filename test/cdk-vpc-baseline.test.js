"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const CdkVpcBaseline = require("../lib/cdk-vpc-baseline-stack");
test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkVpcBaseline.CdkVpcBaselineStack(app, 'MyTestStack');
    // THEN
    assert_1.expect(stack).to(assert_1.matchTemplate({
        "Resources": {}
    }, assert_1.MatchStyle.EXACT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZwYy1iYXNlbGluZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXZwYy1iYXNlbGluZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQWlGO0FBQ2pGLHFDQUFxQztBQUNyQyxnRUFBZ0U7QUFFaEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsT0FBTztJQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksY0FBYyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RSxPQUFPO0lBQ1AsZUFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxzQkFBYSxDQUFDO1FBQ2hDLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLEVBQUUsbUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ3pCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0IGFzIGV4cGVjdENESywgbWF0Y2hUZW1wbGF0ZSwgTWF0Y2hTdHlsZSB9IGZyb20gJ0Bhd3MtY2RrL2Fzc2VydCc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBDZGtWcGNCYXNlbGluZSBmcm9tICcuLi9saWIvY2RrLXZwYy1iYXNlbGluZS1zdGFjayc7XG5cbnRlc3QoJ0VtcHR5IFN0YWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHN0YWNrID0gbmV3IENka1ZwY0Jhc2VsaW5lLkNka1ZwY0Jhc2VsaW5lU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0Q0RLKHN0YWNrKS50byhtYXRjaFRlbXBsYXRlKHtcbiAgICAgIFwiUmVzb3VyY2VzXCI6IHt9XG4gICAgfSwgTWF0Y2hTdHlsZS5FWEFDVCkpXG59KTtcbiJdfQ==