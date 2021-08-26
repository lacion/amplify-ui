import { render, screen } from '@testing-library/react';
import { ComponentClassNames } from '../../shared';
import { TextField } from '../TextField';
import {
  testFlexProps,
  expectFlexStyleProps,
} from '../../Flex/__tests__/Flex.test';
import userEvent from '@testing-library/user-event';

describe('TextField component', () => {
  describe('wrapper Flex', () => {
    it('should render default and custom classname ', async () => {
      render(
        <TextField
          label="Field"
          id="testField"
          testId="testId"
          className="my-textfield"
        />
      );

      const field = await screen.findByTestId('testId');
      expect(field.className).toContain('my-textfield');
      expect(field.className).toContain(ComponentClassNames.TextField);
    });

    it('should render all flex style props', async () => {
      render(<TextField testId="testId" label="field" {...testFlexProps} />);
      const field = await screen.findByTestId('testId');
      expectFlexStyleProps(field);
    });
  });

  describe('Label ', () => {
    it('should render expected field classname', async () => {
      render(<TextField label="Field" />);

      const label = (await screen.findByText('Field')) as HTMLLabelElement;
      expect(label.className).toContain(ComponentClassNames.FieldLabel);
    });

    it('should have `sr-only` class when labelHidden is true', async () => {
      render(<TextField label="Search" labelHidden={true} />);

      const label = await screen.findByText('Search');
      expect(label.className).toContain('sr-only');
    });
  });

  describe('Input field', () => {
    it('should render expected classname, id and aria-labelledby for TextField input field', async () => {
      render(
        <TextField
          label="Field"
          id="testField"
          testId="testId"
          className="my-textfield"
          defaultValue="Hello there"
        />
      );

      const field = await screen.findByRole('textbox');
      expect(field.className).toContain(ComponentClassNames.TextFieldInput);
      expect(field.id).toBe('testField');
      expect(field.getAttribute('aria-labelledby')).toBe('testField');
    });

    it('should render the state attributes', async () => {
      render(
        <TextField
          label="Field"
          size="small"
          defaultValue=""
          hasError
          isDisabled
          isReadOnly
          isRequired
        />
      );

      const field = await screen.findByRole('textbox');
      expect(field.getAttribute('disabled')).toBeDefined();
      expect(field.getAttribute('readonly')).toBeDefined();
      expect(field.getAttribute('required')).toBeDefined();
    });

    it('should set size and variation data attributes', async () => {
      render(<TextField label="Field" size="small" variation="quiet" />);

      const field = await screen.findByRole('textbox');
      expect(field.dataset['size']).toBe('small');
      expect(field.dataset['variation']).toBe('quiet');
    });

    it('can set defaultValue', async () => {
      render(<TextField label="Field" defaultValue="test" />);

      const field = (await screen.findByRole('textbox')) as HTMLInputElement;
      expect(field.value).toBe('test');
    });

    it('show add aria-invalid attribute to input when hasError', async () => {
      render(
        <TextField
          label="Field"
          id="testField"
          hasError={true}
          errorMessage={'Error message'}
        />
      );
      const field = (await screen.findByRole('textbox')) as HTMLInputElement;
      expect(field.getAttribute('aria-invalid')).toBeDefined();
    });

    it('should fire event handlers', async () => {
      const onChange = jest.fn();
      const onInput = jest.fn();
      const onPaste = jest.fn();
      render(
        <TextField
          label="Field"
          onChange={onChange}
          onInput={onInput}
          onPaste={onPaste}
        />
      );
      const field = (await screen.findByRole('textbox')) as HTMLInputElement;
      userEvent.type(field, 'hello');
      userEvent.paste(field, 'there');
      expect(onChange).toHaveBeenCalled();
      expect(onInput).toHaveBeenCalled();
      expect(onPaste).toHaveBeenCalled();
    });
  });

  describe('error messages', () => {
    const errorMessage = 'This is an error message';
    it("don't show when hasError is false", async () => {
      render(
        <TextField label="Field" id="testField" errorMessage={errorMessage} />
      );

      const errorText = await screen.queryByText(errorMessage);
      expect(errorText).not.toBeInTheDocument();
    });

    it('show when hasError and errorMessage', async () => {
      render(
        <TextField
          label="Field"
          id="testField"
          hasError={true}
          errorMessage={errorMessage}
        />
      );
      const errorText = await screen.queryByText(errorMessage);
      expect(errorText.innerHTML).toContain(errorMessage);
    });
  });

  describe('descriptive message', () => {
    it('renders when descriptiveText is provided', async () => {
      render(
        <TextField label="Field" id="testField" descriptiveText="Description" />
      );

      const descriptiveText = await screen.queryByText('Description');
      expect(descriptiveText.innerHTML).toContain('Description');
    });
  });
});
